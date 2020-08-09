import styled from "styled-components";
import { background } from "../../theme/common";
import { TTBackground } from "../../theme/types";

const commonStyles = [
    { key: "line-height", value: 1 },
    { key: "letter-spacing", value: "1px" }
];

const headerStyles = commonStyles.map(({ key, value }) => `${key}:${value};`);
const color = (background: TTBackground) =>
    background === "dark" ? "#fff" : "#232b2b";

const H1 = styled.h1`
    font-size: 2.5rem;
    ${headerStyles}
    color: ${({ theme }) => color(theme.background)}
`;

const H2 = styled.h2`
    font-size: 2rem;
    ${headerStyles}
    color: ${({ theme }) => color(theme.background)}
`;

const H3 = styled.h3`
    font-size: 1.8rem;
    ${headerStyles}
    color: ${({ theme }) => color(theme.background)}
`;

const H4 = styled.h4`
    font-size: 1.5rem;
    ${headerStyles}
    color: ${({ theme }) => color(theme.background)}
`;

const H5 = styled.h5`
    font-size: 1.2rem;
    ${headerStyles}
    color: ${({ theme }) => color(theme.background)}
`;

const H6 = styled.h6`
    font-size: 1rem;
    ${headerStyles}
    color: ${({ theme }) => color(theme.background)}
`;

export default { H1, H2, H3, H4, H5, H6 };
