import React from "react"
import envelopeIcon from "./../../assets/icons/envelope-icon.svg"
import phoneIcon from "./../../assets/icons/phone-icon.svg"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import PropTypes from "prop-types"

const query = graphql`
  {
    site {
      siteMetadata {
        phone
        mail
      }
    }
  }
`

const WrapContainer = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
  }
  li {
    list-style: none;
    margin-right: 4rem;
    display: flex;
    align-items: center;

    img {
      width: 1.8rem;
    }

    a,
    span {
      font-size: 1.5rem;
      margin-left: 1rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`

const NavContact = () => (
  <StaticQuery
    query={query}
    render={data => (
      <WrapContainer>
        <ul>
          <li>
            <img src={envelopeIcon} alt="" />
            <a href={`mailto:${data.site.siteMetadata.mail}`}>
              {data.site.siteMetadata.mail}
            </a>
          </li>
          <li>
            <img src={phoneIcon} alt="" />
            <span>{data.site.siteMetadata.phone}</span>
          </li>
        </ul>
      </WrapContainer>
    )}
  />
)

// NavContact.propTypes = {}

export default NavContact
