import React from "react"
import { Link } from "gatsby"
// import LogoConvex from './LogoConvex'
import convexLogo from "./../../assets/icons/convex-logo.svg"
import styled from "styled-components"

const Logo = styled.span`
  width: 10rem;
`

const Image = styled.img`
  width: 15rem;
  max-width: 15rem;
`

const NavLogo = () => (
  <Logo>
    <Link to="/">
      <Image src={convexLogo} alt="" />
    </Link>
  </Logo>
)

export default NavLogo
