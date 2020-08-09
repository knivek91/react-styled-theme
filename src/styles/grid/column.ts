import styled from "styled-components";

const Column = styled.div`
    flex-basis: 100%;
    position: relative;
    box-sizing: border-box;

    @media screen and (min-width: 800px) {
        & {
            flex: 1;
        }
    }

    // @media (max-width: 1333px) {
    //     & {
    //         flex-basis: 33.33%;
    //     }
    // }
    // @media (max-width: 1073px) {
    //     & {
    //         flex-basis: 33.33%;
    //     }
    // }
    // @media (max-width: 815px) {
    //     & {
    //         flex-basis: 50%;
    //     }
    // }
    // @media (max-width: 555px) {
    //     & {
    //         flex-basis: 100%;
    //     }
    // }
`;

export default Column;
