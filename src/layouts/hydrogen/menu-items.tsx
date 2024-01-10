import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolderNotchDuotone,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Overview',
  },
  // label end
  {
    name: 'دسته بندی',
    href: '/category',
    icon: <PiFolderNotchDuotone />,
  },
  // {
  //   name: 'Support',
  //   href: '#',
  //   icon: <PiHeadsetDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Inbox',
  //       href: routes.support.inbox,
  //     },
  //     {
  //       name: 'Snippets',
  //       href: routes.support.snippets,
  //     },
  //     {
  //       name: 'Templates',
  //       href: routes.support.templates,
  //     },
  //   ],
  // },
  {
    name: 'Roles & Permissions',
    href: routes.rolesPermissions,
    icon: <PiFolderLockDuotone />,
  },

  // label start
  {
    name: 'Tables',
  },
  // label end
  {
    name: 'Basic',
    href: routes.tables.basic,
    icon: <PiGridFourDuotone />,
  },
  {
    name: 'Collapsible',
    href: routes.tables.collapsible,
    icon: <PiCaretCircleUpDownDuotone />,
  },
  {
    name: 'Enhanced',
    href: routes.tables.enhanced,
    icon: <PiTableDuotone />,
  },
  {
    name: 'Sticky Header',
    href: routes.tables.stickyHeader,
    icon: <PiBrowserDuotone />,
  },
  {
    name: 'Pagination',
    href: routes.tables.pagination,
    icon: <PiListNumbersDuotone />,
  },
  {
    name: 'Search',
    href: routes.tables.search,
    icon: <PiHourglassSimpleDuotone />,
  },
  // label start
  {
    name: 'Pages',
  },
  {
    name: 'Profile',
    href: routes.profile,
    icon: <PiUserCircleDuotone />,
  },
  {
    name: 'Welcome',
    href: routes.welcome,
    icon: <PiShootingStarDuotone />,
  },
  {
    name: 'Coming soon',
    href: routes.comingSoon,
    icon: <PiRocketLaunchDuotone />,
  },
  {
    name: 'Access Denied',
    href: routes.accessDenied,
    icon: <PiFolderLockDuotone />,
  },
  {
    name: 'Not Found',
    href: routes.notFound,
    icon: <PiBinocularsDuotone />,
  },
  {
    name: 'Maintenance',
    href: routes.maintenance,
    icon: <PiHammerDuotone />,
  },
  {
    name: 'Blank',
    href: routes.blank,
    icon: <PiNoteBlankDuotone />,
  },

  // label start
  {
    name: 'Authentication',
  },
  // label end
  {
    name: 'Sign In',
    href: '#',
    icon: <PiShieldCheckDuotone />,
    dropdownItems: [
      {
        name: 'Modern Sign in',
        href: routes.auth.signIn1,
      },
      {
        name: 'Vintage Sign in',
        href: routes.auth.signIn2,
      },
      {
        name: 'Trendy Sign in',
        href: routes.auth.signIn3,
      },
      {
        name: 'Elegant Sign in',
        href: routes.auth.signIn4,
      },
      {
        name: 'Classic Sign in',
        href: routes.auth.signIn5,
      },
    ],
  },
  {
    name: 'Forgot Password',
    href: '#',
    icon: <PiLockKeyDuotone />,
    dropdownItems: [
      {
        name: 'Modern Forgot password',
        href: routes.auth.forgotPassword1,
      },
      {
        name: 'Vintage Forgot password',
        href: routes.auth.forgotPassword2,
      },
      {
        name: 'Trendy Forgot password',
        href: routes.auth.forgotPassword3,
      },
      {
        name: 'Elegant Forgot password',
        href: routes.auth.forgotPassword4,
      },
      {
        name: 'Classic Forgot password',
        href: routes.auth.forgotPassword5,
      },
    ],
  },
];
