interface Size {
  xs: string;
  sm: string;
  md: string;
  lgPhones: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  xs: "25rem", // for small screen mobile
  // xs: "31rem", // for small screen mobile
  // sm: "41rem", // for mobile screen
  sm: "40rem", // for mobile screen
  // md: "48rem", // for tablets
  md: "56rem", // for tablets
  lgPhones: "60rem", // for landscape phones
  lg: "80rem", // for laptops
  xl: "84rem", // for desktop / monitors
  xxl: "120rem", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lgPhones: `(max-width: ${size.lgPhones}) and (orientation: landscape)`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

// interface Size {
//   xs: string;
//   sm: string;
//   md: string;
//   lg: string;
//   xl: string;
//   xxl: string;
// }

// const size: Size = {
//   xs: "25rem", // for small screen mobile
//   sm: "41rem", // for mobile screen
//   md: "56rem", // for tablets

//   lg: "80rem", // for laptops
//   xl: "84rem", // for desktop / monitors
//   xxl: "120rem", // for big screens
// };

// export const device = {
//   xs: `(max-width: ${size.xs})`,
//   sm: `(max-width: ${size.sm})`,
//   md: `(max-width: ${size.md})`,

//   lg: `(max-width: ${size.lg})`,
//   xl: `(max-width: ${size.xl})`,
//   xxl: `(max-width: ${size.xxl})`,
// };
