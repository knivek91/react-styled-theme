import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import {
    Button,
    Container,
    Row,
    Column,
    Header,
    Nav,
    NavBar,
    Menu,
    MenuItem,
    GlobalStyles
} from "./styles";
import { ButtonContainer, GridContainer } from "./styled";
import { TTBackground } from "./theme/types";

const createCols = (cols: number[]) =>
    cols.map((c, i) => (
        <Column key={i} className="bg-col">
            {c}
        </Column>
    ));

const createHeaders = (headers: number[]) =>
    headers.map((h, i) => (
        <Header
            key={i}
            //@ts-ignore
            level={h}
            className="bg-col"
        >{`This is a H${h}`}</Header>
    ));

function App() {
    const [currentTheme, setCurrentThme] = useState<TTBackground>("light");

    const onToggleThme = () =>
        setCurrentThme(currentTheme === "light" ? "dark" : "light");

    return (
        <ThemeProvider theme={{ ...theme, background: currentTheme }}>
            <>
                <GlobalStyles />
                <Container>
                    <Nav>
                        <NavBar>
                            <Menu>
                                <MenuItem onClick={onToggleThme}>
                                    Light
                                </MenuItem>
                            </Menu>
                            <Menu>
                                <MenuItem onClick={onToggleThme}>Dark</MenuItem>
                            </Menu>
                        </NavBar>
                    </Nav>
                    <ButtonContainer>
                        <Header level={1}>Buttons</Header>
                        <Button color="primary">primary</Button>
                        <Button color="secondary">secondary</Button>
                        <Button color="error">error</Button>
                        <Button color="info">info</Button>
                        <Button color="success">success</Button>
                        <Button color="warning">warning</Button>
                    </ButtonContainer>
                    <GridContainer>
                        <Header level={1}>Grid System</Header>
                        <Row>{createCols([1])}</Row>
                        <Row>{createCols([1, 2])}</Row>
                        <Row>{createCols([1, 2, 3])}</Row>
                        <Row>{createCols([1, 2, 3, 4])}</Row>
                        <Row>{createCols([1, 2, 3, 4, 5])}</Row>
                    </GridContainer>
                    <div>
                        <Header level={1}>Headers</Header>
                        {createHeaders([6, 5, 4, 3, 2, 1])}
                    </div>
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
