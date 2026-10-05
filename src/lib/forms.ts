/**
 * Form submission (browser). Sends to Formspree when a form ID is configured
 * in src/content/property.ts; otherwise opens the visitor's email app with
 * the message prefilled, so the forms work before Formspree is set up.
 */

export type SendResult = 'sent' | 'mail' | 'error';

export interface SendOptions {
  formId: string | null;
  fallbackEmail: string | null;
  subject: string;
  /**
   * Label → value, in the order they should appear in the owner's email.
   * Keep the key `email` as is: Formspree uses it as the reply-to address.
   * Empty values are left out.
   */
  data: Record<string, string>;
}

export async function sendForm({ formId, fallbackEmail, subject, data: raw }: SendOptions): Promise<SendResult> {
  const data = Object.fromEntries(Object.entries(raw).filter(([, v]) => v !== ''));
  if (formId) {
    try {
      const res = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: subject }),
      });
      return res.ok ? 'sent' : 'error';
    } catch {
      return 'error';
    }
  }
  if (fallbackEmail) {
    const body = Object.entries(data)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return 'mail';
  }
  return 'error';
}

/** Collect a form's named fields as trimmed strings (the `_gotcha` honeypot excluded). */
export function formValues(form: HTMLFormElement): Record<string, string> {
  const out: Record<string, string> = {};
  new FormData(form).forEach((v, k) => {
    if (k !== '_gotcha' && typeof v === 'string') out[k] = v.trim();
  });
  return out;
}

/** true when the hidden honeypot field was filled in (a bot). */
export const isSpam = (form: HTMLFormElement) => !!(form.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value;

/** Marks the fields that failed validation for assistive technology; the mark clears as soon as the guest edits the field. */
export function markInvalid(form: HTMLFormElement): void {
  for (const field of form.querySelectorAll<HTMLElement>('input, select, textarea')) {
    if (field.matches(':invalid')) {
      field.setAttribute('aria-invalid', 'true');
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'), { once: true });
    } else field.removeAttribute('aria-invalid');
  }
}

/**
 * Shows the outcome of a form. Errors are announced immediately (role="alert"),
 * confirmations politely (role="status").
 */
export function showFormResult(el: HTMLElement, text: string, ok: boolean): void {
  el.setAttribute('role', ok ? 'status' : 'alert');
  el.textContent = text;
  el.classList.toggle('is-error', !ok);
  el.hidden = false;
}

/**
 * Marks a submit button as busy without disabling it: a disabled button loses
 * keyboard focus, which throws keyboard and screen-reader users back to the page start.
 */
export function setBusy(button: HTMLButtonElement, busy: boolean): void {
  if (busy) button.setAttribute('aria-disabled', 'true');
  else button.removeAttribute('aria-disabled');
}
