import { ReactNode } from "react";

// Common
export type TMargin = {
    margin?: 0 | 2 | 4 | 6 | 8 | 12 | 14 | 16 | 22;
};

export type TPadding = {
    padding?: 0 | 2 | 4 | 8 | 16 | 24 | 32;
};

export type TVariant =
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";

export type TColor = {
    color?: TVariant;
};
export type TFontSize = {
    fontSize?: "sm" | "md" | "lg" | "xl";
};

export type TFontFamily = {
    fontFamily?: "arial" | "sans_serif" | "sitka";
};

// Button
export interface IButtonStyle
    extends TColor,
        TFontFamily,
        TFontSize,
        TMargin,
        TPadding {}

// Row
export interface IRow extends TMargin, TPadding {}

// Header
export interface IHeader {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}
