export const colors = {
  primaryGradient: "var(--primaryGradient)",
  primary100: "var(--primary100)",
  primary200: "var(--primary200)",
  primary400: "var(--primary400)",
  primary500: "var(--primary500)",

  orange100: "var(--orange100)",
  orange200: "var(--orange200)",

  remarksYellow01: "var(--remarksYellow01)",
  remarksYellow02: "var(--remarksYellow02)",

  statusGreen01: "var(--statusGreen01)",
  statusGreen02: "var(--statusGreen02)",
  remarksGreen01: "var(--remarksGreen01)",
  remarksGreen02: "var(--remarksGreen02)",
  remarksGreen03: "var(--remarksGreen03)",
  remarksGreen04: "var(--remarksGreen04)",
  remarksGreen05: "var(--remarksGreen05)",
  remarksGreen06: "var(--remarksGreen06)",

  remarksBlue01: "var(--remarksBlue01)",
  remarksBlue02: "var(--remarksBlue02)",
  remarksBlue03: "var(--remarksBlue03)",
  remarksBlue04: "var(--remarksBlue04)",

  gray100: "var(--gray100)",
  gray200: "var(--gray200)",
  gray300: "var(--gray300)",
  gray400: "var(--gray400)",
  gray500: "var(--gray500)",
  gray600: "var(--gray600)",
  gray700: "var(--gray700)",
  gray800: "var(--gray800)",

  black: "var(--black)",
  white: "var(--white)",

  validationColor: "var(--validation)",
  successColor: "var(--success)",
  focusColor: "var(--focus)",
} as const;
export type Color = keyof typeof colors;
