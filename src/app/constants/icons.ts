export type icon = {
  URL: string;
};

export enum IconType {
  SUN,
  MOON,
  SEARCH,
}

export const iconMap: Record<IconType, icon> = {
  [IconType.SUN]: { URL: '/assets/images/desktop/icon-sun.svg' },
  [IconType.MOON]: { URL: '/assets/images/desktop/icon-moon.svg' },
  [IconType.SEARCH]: { URL: '/assets/images/desktop/icon-search.svg' },
};
