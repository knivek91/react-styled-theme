import styled from "styled-components";

export const Nav = styled.nav`
    max-width: 100%;
    background-color: ${({ theme }) => theme.background};
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const NavBar = styled.ul`
    border-radius: 4px;
    overflow: hidden;
`;

export const Menu = styled.li`
    float: left;
    width: 20%;
    list-style: none;
`;

export const MenuItem = styled.a`
    cursor: pointer;
    color: #848484;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    padding: 20px 0;
    display: block;
    position: relative;
    transition: all 0.3s ease;

    ::before {
        content: "";
        transition: all 0.4s ease-in-out;
        position: absolute;
        right: 50%;
        left: 50%;
        bottom: 0;
        height: 2px;
        background-color: #e74c3c;
    }

    :hover {
        color: #e74c3c;
    }

    :hover ::before {
        right: 0;
        left: 0;
    }
`;
