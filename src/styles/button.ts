import styled from "styled-components";

import { computeButtonStyles } from "./common";
import { IButtonStyle } from "./types";

export default styled.button<IButtonStyle>`
    ${({ theme, color, margin, padding }) =>
        computeButtonStyles(theme, { color, margin, padding })}
    border-radius: 4px;
    pointer: cursor;
`;
