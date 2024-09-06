import { MenuItem } from '../index';

export class Menu {
  public static pages: MenuItem[] = [
    {
      items: [
        {
          iconDark: 'assets/icons/black/home.svg',
          iconWhite: 'assets/icons/white/home.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        {
          iconDark: 'assets/icons/black/news.svg',
          iconWhite: 'assets/icons/white/news.svg',
          label: 'News',
          route: '/dashboard/news',
        },
        {
          iconDark: 'assets/icons/black/chart.svg',
          iconWhite: 'assets/icons/white/chart.svg',
          label: 'Activities',
          route: '/dashboard/activity',
        },
        {
          iconDark: 'assets/icons/black/credit-card.svg',
          iconWhite: 'assets/icons/white/credit-card.svg',
          label: 'Cards',
          route: '/dashboard/card',
        },
        {
          iconDark: 'assets/icons/black/reports.svg',
          iconWhite: 'assets/icons/white/reports.svg',
          label: 'Report',
          route: '/dashboard/report',
          children: [{ label: 'Sign in', route: '/auth/sign-in' }],
        },
        {
          iconDark: 'assets/icons/black/bell.svg',
          iconWhite: 'assets/icons/white/bell.svg',
          label: 'Notification',
          route: '/dashboard/notification',
        },
        {
          iconDark: 'assets/icons/black/wallet.svg',
          iconWhite: 'assets/icons/white/wallet.svg',
          label: 'Billing',
          route: '/dashboard/billing',
        },
        {
          iconDark: 'assets/icons/black/invoice.svg',
          iconWhite: 'assets/icons/white/invoice.svg',
          label: 'Invoices',
          route: '/dashboard/invoice',
        },
        {
          iconDark: 'assets/icons/black/headphone.svg',
          iconWhite: 'assets/icons/white/headphone.svg',
          label: 'Help center',
          route: '/dashboard/helper',
        },
        {
          iconDark: 'assets/icons/black/settings.svg',
          iconWhite: 'assets/icons/white/settings.svg',
          label: 'Setting',
          route: '/dashboard/setting',
        },
      ],
    },
  ];
}
