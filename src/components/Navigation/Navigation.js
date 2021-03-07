import React from "react"
import { Link } from "gatsby"
// import LogoConvex from './LogoConvex'
import PropTypes from "prop-types"

import NavLogo from "./../NavLogo/NavLogo"
import styled from "styled-components"
import NavContact from "./../NavContact/NavContact"

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

const NavListItem = styled.li`
  font-size: 1.5rem;
  margin-right: 3rem;
`

const Navigation = ({ logoOnLeftSite, bgGrey }) => (
  <NavWrapper
    className={`${logoOnLeftSite ? " pl-24 w-7/12" : "px-24 w-full"} ${
      bgGrey ? "bg-gray-100" : "bg-white"
    }`}
  >
    {logoOnLeftSite && <NavLogo />}
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
    {!logoOnLeftSite && (
      <>
        <NavLogo />
        <NavContact />
      </>
    )}
  </NavWrapper>
)

Navigation.propTypes = {
  logoOnLeftSite: PropTypes.bool,
  bgGrey: PropTypes.bool,
}

Navigation.defaultProps = {
  logoOnLeftSite: false,
  bgGrey: false,
}

export default Navigation
