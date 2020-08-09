import styled from "styled-components";
import { IRow } from "../types";

const Row = styled.div<IRow>`
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin ${({ margin = 0 }) => margin}px
    padding ${({ padding = 0 }) => padding}px
`;

export default Row;
