const palette = {
  neutral900: "#FFFFFF",
  neutral800: "#F4F2F1",
  neutral700: "#D7CEC9",
  neutral600: "#B6ACA6",
  neutral500: "#978F8A",
  neutral400: "#564E4A",
  neutral300: "#3C3836",
  neutral200: "#191015",
  neutral100: "#000000",

  primary600: "#F3E5F5",
  primary500: "#E1BEE7",
  primary400: "#CE93D8",
  primary300: "#BA68C8",
  primary200: "#9C27B0",
  primary100: "#7B1FA2",

  secondary500: "#EDE7F6",
  secondary400: "#D1C4E9",
  secondary300: "#B39DDB",
  secondary200: "#9575CD",
  secondary100: "#7E57C2",

  accent500: "#F3E5F5",
  accent400: "#E1BEE7",
  accent300: "#CE93D8",
  accent200: "#BA68C8",
  accent100: "#AB47BC",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text: palette.neutral800,
  textDim: palette.neutral600,
  background: palette.neutral200,
  border: palette.neutral400,
  tint: palette.primary500,
  tintInactive: palette.neutral300,
  separator: palette.neutral300,
  error: palette.angry500,
  errorBackground: palette.angry100,
} as const
