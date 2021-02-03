import React from "react"
import { Link } from "gatsby"
// import LogoConvex from './LogoConvex'
import convexLogo from "./../../assets/icons/convex-logo.svg"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  background: red;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    text-decoration: none;
    color: inherit;
    font-family: "Montserrat";
  }
`

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`

const Logo = styled.span`
  width: 100px;
`

const Image = styled.img`
  width: 6rem;
`

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">
        <Image src={convexLogo} alt="" />
      </Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/">strona główna</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/o-nas">o nas</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/oferta">ofert</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/kontakt">kontakt</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
