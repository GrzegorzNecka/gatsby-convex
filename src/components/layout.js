/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navigation from "./Navigation/Navigation"
import GlobalStyle from "../styles/styledComponents/globalStyles"
import Theme from "../styles/styledComponents/mainTheme.js"
import Footer from "./Footer/Footer"
import PropTypes from "prop-types"

const Layout = ({ logoOnLeftSite, isFooter, children }) => (
  <Theme>
    <GlobalStyle />
    <Navigation logoOnLeftSite={logoOnLeftSite} />
    <main className={logoOnLeftSite ? "px-24" : "p-24"}>{children}</main>
    {isFooter && <Footer />}
  </Theme>
)

Navigation.propTypes = {
  logoOnLeftSite: PropTypes.bool,
}

Navigation.defaultProps = {
  logoOnLeftSite: false,
}
export default Layout
