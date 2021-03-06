import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Button from "../components/Button/Button"
import NavContact from "../components/NavContact/NavContact"
import SEO from "../components/seo"

const HeaderWrap = styled.div`
  width: 50%;
  height: calc(100vh - 8rem - 4rem);
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 70%;
  /* background: pink; */

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    margin: 0;
    padding: 0;
    line-height: 1.1;
    margin: 0 0 4rem 0;
  }

  p {
    width: 65%;
    padding: 0;
    line-height: 1.8;
    margin: 0 0 4rem 0;
  }
`

const FrontImage = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  object-fit: cover;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0 100%);
  height: 100vh;
`

const Footer = styled.footer`
  width: 50%;
  height: 4rem;
  padding: 0;
`

const IndexPage = ({ data }) => (
  <Layout logoOnLeftSite>
    <SEO title={data.site.siteMetadata.name} />
    <HeaderWrap>
      <Header>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
        <Link to="/o-firmie">
          <Button>SPRAWDŹ NASZĄ FIRMĘ</Button>
        </Link>
      </Header>
    </HeaderWrap>
    <FrontImage fluid={data.file.childImageSharp.fluid} />
    <Footer>
      <NavContact />
    </Footer>
  </Layout>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        name
      }
    }
    file(name: { eq: "front-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
// ...GatsbyImageSharpFluid_withWebp_tracedSVG
export default IndexPage
