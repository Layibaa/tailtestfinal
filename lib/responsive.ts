// lib/responsive.ts
export const breakpoints = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile - 1}px)`,
  tablet: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
  laptop: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.laptop - 1}px)`,
  desktop: `(min-width: ${breakpoints.laptop}px)`,
  tabletAndUp: `(min-width: ${breakpoints.mobile}px)`,
  laptopAndUp: `(min-width: ${breakpoints.tablet}px)`,
};