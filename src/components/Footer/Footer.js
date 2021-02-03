import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.nav`
  background: red;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Footer = () => (
  <FooterWrapper>© {new Date().getFullYear()}, Convex</FooterWrapper>
)

export default Footer
