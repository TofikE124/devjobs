export type icon = {
  URL: string;
};

export enum IconType {
  SUN,
  MOON,
  SEARCH,
  LOGO,
  LOCATION,
  FILTER,
}

export const iconMap: Record<IconType, icon> = {
  [IconType.SUN]: { URL: '/assets/images/desktop/icon-sun.svg' },
  [IconType.MOON]: { URL: '/assets/images/desktop/icon-moon.svg' },
  [IconType.SEARCH]: { URL: '/assets/images/desktop/icon-search.svg' },
  [IconType.LOCATION]: { URL: '/assets/images/desktop/icon-location.svg' },
  [IconType.FILTER]: { URL: '/assets/images/mobile/icon-filter.svg' },
  [IconType.LOGO]: { URL: '/assets/images/desktop/logo.svg' },
};
