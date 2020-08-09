import React from "react";

import headers from "./styles";
import { IHeader } from "../types";
import { isNil } from "../utils";

export const Header = ({ level, children }: IHeader) => {
    let MyHeader = null;
    switch (level) {
        case 1:
            MyHeader = headers.H1;
            break;
        case 2:
            MyHeader = headers.H2;
            break;
        case 3:
            MyHeader = headers.H3;
            break;
        case 4:
            MyHeader = headers.H4;
            break;
        case 5:
            MyHeader = headers.H5;
            break;
        case 6:
            MyHeader = headers.H6;
            break;
    }

    if (isNil(MyHeader)) return null;
    return <MyHeader>{children}</MyHeader>;
};
