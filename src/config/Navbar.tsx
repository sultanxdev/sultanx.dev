export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.jpg',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
