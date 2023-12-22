const applyMediaQuery = (styles, breakpoint) => `
  @media screen and (max-width: ${breakpoint}px) {
    ${styles};
  }
`;

export const mobile = (styles) => applyMediaQuery(styles, 480);
export const tablet = (styles) => applyMediaQuery(styles, 768);
export const laptop = (styles) => applyMediaQuery(styles, 1200);
