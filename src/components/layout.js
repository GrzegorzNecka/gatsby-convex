/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navigation from "./Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import Theme from "../assets/styles/mainTheme.js"
import Footer from "./Footer/Footer"


const Layout = ({isFooter, children }) => (<Theme>
  <GlobalStyle />
  <Navigation />
  <main>{children}</main>
  {isFooter && <Footer/>}
  
</Theme>)


export default Layout
