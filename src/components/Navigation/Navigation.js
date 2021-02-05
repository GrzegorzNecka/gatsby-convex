import React from "react"
import { Link } from "gatsby"
// import LogoConvex from './LogoConvex'
import convexLogo from "./../../assets/icons/convex-logo.svg"
import styled from "styled-components"

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 8rem;
  display: flex;
  align-items: center;
  /* justify-content: flex-start;
  width:100%; */
  justify-content: space-between;
  width: 50%;
  padding: 0 0 0 6.5rem;

  a {
    text-decoration: none;
    color: inherit;
    font-family: "Montserrat";
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`

const NavListItem = styled.li`
  font-size: 15px;
  margin-left: 32px;
`

const Logo = styled.span`
  width: 10rem;
`

const Image = styled.img`
  width: 12rem;
`

const Navigation = () => (
  <NavWrapper>
    <Logo>
      <Link to="/">
        <Image src={convexLogo} alt="" />
      </Link>
    </Logo>
    <NavList>
      <NavListItem>
        <Link to="/">strona główna</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/o-nas">o nas</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/oferta">ofert</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/kontakt">kontakt</Link>
      </NavListItem>
    </NavList>
  </NavWrapper>
)

export default Navigation
