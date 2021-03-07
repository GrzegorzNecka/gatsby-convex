import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const FooterWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Address = styled.address`
  font-style: normal;
  & li {
    padding: 0.25rem 0;
  }
`

const Info = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  & span {
    padding: 0.25rem 0;
  }
`

const Coopyright = styled.small`
  width: 100%;
`

// - guwry

const query = graphql`
  {
    site {
      siteMetadata {
        phone
        mail
        adres
        czas_pracy
      }
    }
  }
`

const Footer = () => (
  <StaticQuery
    query={query}
    render={data => (
      <footer className={` px-24  bg-white text-xl`}>
        <FooterWrapper className={`py-7 font-semibold`}>
          <Address>
            <ul>
              <li>
                <span>adres: {data.site.siteMetadata.adres}</span>
              </li>
              <li>
                <a href={`mailto:${data.site.siteMetadata.mail}`}>
                  mail: {data.site.siteMetadata.mail}
                </a>
              </li>
              <li>
                <span> tel: {data.site.siteMetadata.phone}</span>
              </li>
            </ul>
          </Address>
          <Info>
            <span>Godziny otwarcia:</span>
            <span> {data.site.siteMetadata.czas_pracy}</span>
          </Info>
        </FooterWrapper>
        <Coopyright>
          Copyrigh © {new Date().getFullYear()}, Convex Opakowania
        </Coopyright>
      </footer>
    )}
  />
)

export default Footer
