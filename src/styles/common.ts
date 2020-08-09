import { ITheme } from "../theme/types";
import { IButtonStyle, TVariant } from "./types";

import { getDefaultOrValue } from "./utils";
import { DEFAULT_BUTTON_PROPS } from "./constants";

export const computeButtonStyles = (
    theme: ITheme,
    { color, padding, margin }: IButtonStyle
): string => {
    const currentTheme = theme.background;
    const colorValue = getDefaultOrValue(
        DEFAULT_BUTTON_PROPS.color,
        color
    ) as TVariant;
    const defColor = theme.palette[colorValue];
    const defContrastText = theme.palette[colorValue].contrastText;
    const defPadding = getDefaultOrValue(
        DEFAULT_BUTTON_PROPS.padding,
        padding
    ) as number;
    const defMargin = getDefaultOrValue(
        DEFAULT_BUTTON_PROPS.margin,
        margin
    ) as number;

    const background = `background: ${defColor[currentTheme]};`;
    const styleColor = `color: ${defContrastText};`;
    const border = `border: ${defColor[currentTheme]};`;
    const stylePadding = `padding: ${defPadding}px;`;
    const styleMargin = `margin: ${defMargin}px;`;

    return `${background} ${styleColor} ${border} ${stylePadding} ${styleMargin}`;
};
