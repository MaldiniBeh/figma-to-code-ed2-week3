import { MenuItem } from '../index';

export class Menu {
  public static pages: MenuItem[] = [
    {
      items: [
        {
          iconDark: 'assets/icons/dark/home.svg',
          iconWhite: 'assets/icons/white/home.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'News',
          route: '/dashboard/news',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Activities',
          route: '/dashboard/activity',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Cards',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Report',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Notification',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Billing',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Invoices',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Help center',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/dark/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Setting',
          route: '/dashboard',
        },
      ],
    },
  ];
}
