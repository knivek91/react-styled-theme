export type TColor = {
    contrastText: string;
    dark: string;
    light: string;
    main: string;
};

export type TTFontSize = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
};

export type TTFontFamily = {
    arial: string;
    sans_serif: string;
    sitka: string;
};

export type TTBackground = "light" | "dark";

export type TTPalette = {
    primary: TColor;
    secondary: TColor;
    error: TColor;
    warning: TColor;
    info: TColor;
    success: TColor;
};

export interface ITheme {
    fontSize: TTFontSize;
    fontFamily: TTFontFamily;
    background: TTBackground;
    palette: TTPalette;
}
