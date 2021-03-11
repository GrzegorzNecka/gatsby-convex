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

const Layout = ({ logoOnLeftSite, isFooter, bgGrey, children }) => (
  <Theme>
    <GlobalStyle />
    <Navigation bgGrey={bgGrey} logoOnLeftSite={logoOnLeftSite} />
    <div className={` ${bgGrey ? "bg-gray-100" : "bg-white "}`}>
      <main
        className={`${
          logoOnLeftSite ? " pl-24" : "px-24 max-w-screen-2xl mx-auto my-0"
        } ${bgGrey ? "bg-gray-100" : "bg-white "}`}
      >
        {children}
      </main>
    </div>
    {isFooter && <Footer />}
  </Theme>
)

Navigation.propTypes = {
  logoOnLeftSite: PropTypes.bool,
  bgGrey: PropTypes.bool,
}

Navigation.defaultProps = {
  logoOnLeftSite: false,
  bgGrey: false,
}
export default Layout
