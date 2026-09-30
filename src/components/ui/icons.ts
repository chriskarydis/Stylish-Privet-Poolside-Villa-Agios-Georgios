/**
 * Icon registry. Lucide icons (https://lucide.dev, ISC licence) are rendered
 * to static SVG at build time — no JavaScript is shipped for icons.
 * A few appliance icons missing from Lucide are drawn below in the same style.
 */
import AirVent from '@lucide/astro/icons/air-vent';
import Armchair from '@lucide/astro/icons/armchair';
import ArrowRight from '@lucide/astro/icons/arrow-right';
import Bath from '@lucide/astro/icons/bath';
import BedDouble from '@lucide/astro/icons/bed-double';
import BedSingle from '@lucide/astro/icons/bed-single';
import Bike from '@lucide/astro/icons/bike';
import Bird from '@lucide/astro/icons/bird';
import Car from '@lucide/astro/icons/car';
import Check from '@lucide/astro/icons/check';
import ChevronDown from '@lucide/astro/icons/chevron-down';
import ChevronLeft from '@lucide/astro/icons/chevron-left';
import ChevronRight from '@lucide/astro/icons/chevron-right';
import Baby from '@lucide/astro/icons/baby';
import CigaretteOff from '@lucide/astro/icons/cigarette-off';
import Clock from '@lucide/astro/icons/clock';
import Coffee from '@lucide/astro/icons/coffee';
import Compass from '@lucide/astro/icons/compass';
import CookingPot from '@lucide/astro/icons/cooking-pot';
import Droplets from '@lucide/astro/icons/droplets';
import Expand from '@lucide/astro/icons/expand';
import ExternalLink from '@lucide/astro/icons/external-link';
import Eye from '@lucide/astro/icons/eye';
import Fence from '@lucide/astro/icons/fence';
import Fish from '@lucide/astro/icons/fish';
import Flame from '@lucide/astro/icons/flame';
import Flower2 from '@lucide/astro/icons/flower-2';
import Footprints from '@lucide/astro/icons/footprints';
import House from '@lucide/astro/icons/house';
import Images from '@lucide/astro/icons/images';
import Info from '@lucide/astro/icons/info';
import Landmark from '@lucide/astro/icons/landmark';
import Leaf from '@lucide/astro/icons/leaf';
import Mail from '@lucide/astro/icons/mail';
import MapPin from '@lucide/astro/icons/map-pin';
import Menu from '@lucide/astro/icons/menu';
import MessageCircle from '@lucide/astro/icons/message-circle';
import Mountain from '@lucide/astro/icons/mountain';
import PartyPopper from '@lucide/astro/icons/party-popper';
import PawPrint from '@lucide/astro/icons/paw-print';
import Phone from '@lucide/astro/icons/phone';
import Plane from '@lucide/astro/icons/plane';
import Refrigerator from '@lucide/astro/icons/refrigerator';
import Ruler from '@lucide/astro/icons/ruler';
import Sailboat from '@lucide/astro/icons/sailboat';
import Shirt from '@lucide/astro/icons/shirt';
import ShowerHead from '@lucide/astro/icons/shower-head';
import Snowflake from '@lucide/astro/icons/snowflake';
import Sofa from '@lucide/astro/icons/sofa';
import SquareParking from '@lucide/astro/icons/square-parking';
import Star from '@lucide/astro/icons/star';
import Sun from '@lucide/astro/icons/sun';
import Sunset from '@lucide/astro/icons/sunset';
import Trees from '@lucide/astro/icons/trees';
import Tv from '@lucide/astro/icons/tv';
import Users from '@lucide/astro/icons/users';
import Utensils from '@lucide/astro/icons/utensils';
import UtensilsCrossed from '@lucide/astro/icons/utensils-crossed';
import WashingMachine from '@lucide/astro/icons/washing-machine';
import WavesHorizontal from '@lucide/astro/icons/waves-horizontal';
import WavesLadder from '@lucide/astro/icons/waves-ladder';
import Wifi from '@lucide/astro/icons/wifi';
import X from '@lucide/astro/icons/x';

export const lucideIcons = {
  'air-vent': AirVent,
  armchair: Armchair,
  'arrow-right': ArrowRight,
  baby: Baby,
  bath: Bath,
  'bed-double': BedDouble,
  'bed-single': BedSingle,
  bike: Bike,
  bird: Bird,
  car: Car,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'cigarette-off': CigaretteOff,
  clock: Clock,
  coffee: Coffee,
  compass: Compass,
  'cooking-pot': CookingPot,
  droplets: Droplets,
  expand: Expand,
  'external-link': ExternalLink,
  eye: Eye,
  fence: Fence,
  fish: Fish,
  flame: Flame,
  flower: Flower2,
  footprints: Footprints,
  house: House,
  images: Images,
  info: Info,
  landmark: Landmark,
  leaf: Leaf,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  'message-circle': MessageCircle,
  mountain: Mountain,
  'party-popper': PartyPopper,
  'paw-print': PawPrint,
  phone: Phone,
  plane: Plane,
  refrigerator: Refrigerator,
  ruler: Ruler,
  sailboat: Sailboat,
  shirt: Shirt,
  'shower-head': ShowerHead,
  snowflake: Snowflake,
  sofa: Sofa,
  parking: SquareParking,
  star: Star,
  sun: Sun,
  sunset: Sunset,
  trees: Trees,
  tv: Tv,
  users: Users,
  utensils: Utensils,
  'utensils-crossed': UtensilsCrossed,
  'washing-machine': WashingMachine,
  waves: WavesHorizontal,
  pool: WavesLadder,
  wifi: Wifi,
  x: X,
} as const;

/** SVG child elements (24×24 grid, stroked) for icons Lucide does not provide. */
export const customIcons = {
  kettle: [
    ['path', { d: 'M6 20h11' }],
    ['path', { d: 'M7 9h9l1 11H6z' }],
    ['path', { d: 'M8 9a3.5 3.5 0 0 1 7 0' }],
    ['path', { d: 'M16.4 11.5 20 9' }],
    ['path', { d: 'M17 17h1.5a2 2 0 0 0 2-2v-1' }],
    ['path', { d: 'M11.5 4.5v1' }],
  ],
  toaster: [
    ['rect', { x: '3', y: '9', width: '18', height: '11', rx: '3' }],
    ['path', { d: 'M8 9V5.5A1.5 1.5 0 0 1 9.5 4h1A1.5 1.5 0 0 1 12 5.5V9' }],
    ['path', { d: 'M13 9V6.5A1.5 1.5 0 0 1 14.5 5h.5a1.5 1.5 0 0 1 1.5 1.5V9' }],
    ['path', { d: 'M7 14h4' }],
    ['circle', { cx: '17', cy: '14.5', r: '1' }],
  ],
  oven: [
    ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }],
    ['path', { d: 'M3 8h18' }],
    ['rect', { x: '7', y: '11', width: '10', height: '7', rx: '1' }],
    ['path', { d: 'M7 5.5h.01M10 5.5h.01M13 5.5h.01' }],
    ['path', { d: 'M16 5.5h2' }],
  ],
  iron: [
    ['path', { d: 'M3 18h17a1 1 0 0 0 1-1v-1.5A6.5 6.5 0 0 0 14.5 9H8' }],
    ['path', { d: 'M3 18c0-4 2.5-7 6-9' }],
    ['path', { d: 'M9 6h8a2 2 0 0 1 2 2v1' }],
    ['path', { d: 'M8 14h.01M11 14h.01' }],
  ],
  hairdryer: [
    ['path', { d: 'M15 5a5 5 0 1 1 0 10H9.5L4 17.5V5z' }],
    ['circle', { cx: '15', cy: '10', r: '2' }],
    ['path', { d: 'M9.5 15 11 21h3l-1-6' }],
  ],
  stovetop: [
    ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }],
    ['circle', { cx: '8.5', cy: '8.5', r: '2.5' }],
    ['circle', { cx: '15.5', cy: '8.5', r: '2' }],
    ['circle', { cx: '8.5', cy: '15.5', r: '2' }],
    ['circle', { cx: '15.5', cy: '15.5', r: '2.5' }],
  ],
  lounger: [
    ['path', { d: 'M3 16h11l5-7' }],
    ['path', { d: 'M5 16v4M16 12v8M12 16v4' }],
    ['path', { d: 'M20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0' }],
  ],
  balcony: [
    ['path', { d: 'M6 12V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8' }],
    ['path', { d: 'M12 3v9' }],
    ['path', { d: 'M3 12h18' }],
    ['path', { d: 'M3 21h18' }],
    ['path', { d: 'M5 12v9M9 12v9M15 12v9M19 12v9' }],
  ],
  towel: [
    ['path', { d: 'M5 4h11a3 3 0 0 1 3 3v13H8V7a3 3 0 0 0-3-3' }],
    ['path', { d: 'M5 4a3 3 0 0 0-3 3v2h6' }],
    ['path', { d: 'M8 16h11' }],
  ],
  linen: [
    ['rect', { x: '3', y: '5', width: '18', height: '5', rx: '1.5' }],
    ['rect', { x: '4', y: '10', width: '16', height: '5', rx: '1.5' }],
    ['rect', { x: '3', y: '15', width: '18', height: '5', rx: '1.5' }],
  ],
  terrace: [
    ['path', { d: 'M12 3 3 8h18z' }],
    ['path', { d: 'M12 8v8' }],
    ['path', { d: 'M8 16h8' }],
    ['path', { d: 'M3 21h18' }],
    ['path', { d: 'M5 21v-5M19 21v-5' }],
  ],
} as const satisfies Record<string, ReadonlyArray<readonly [string, Record<string, string>]>>;

export type IconName = keyof typeof lucideIcons | keyof typeof customIcons;
