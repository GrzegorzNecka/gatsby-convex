import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/Button/Button"
import envelopeIcon from "./../assets/icons/envelope-icon.svg"
import phoneIcon from "./../assets/icons/phone-icon.svg"
import SEO from "../components/seo"

const Header = styled.header`
  width: 50%;
  height: calc(100vh - 8rem - 4rem);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    margin: 0;
    padding: 0;
    width: 50%;
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

const FrontImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  /* object-fit: cover; */
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0 100%);
  height: 100vh;
`

const Footer = styled.footer`
  width: 50%;
  height: 4rem;
  padding: 0;

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="CONVEX" />
    <Header>
      <h1>Producent opakowań kartonowych</h1>
      <p>
        CONVEX producentem opakowań kartonowych, na terenie Krakowa. Działamy
        nieprzerwanie od 1995 roku
      </p>
      <Button>SPRAWDŹ NASZĄ OFERTĘ</Button>
    </Header>
    <FrontImage
      src={data.file.childImageSharp.fluid.src}
      sizes={data.file.childImageSharp.fluid.sizes}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      alt=""
    ></FrontImage>
    <Footer>
      <ul>
        <li>
          <img src={envelopeIcon} alt="" />
          <a href="mailto:biuro@convex.com.pl">biuro@convex.com.pl</a>
        </li>
        <li>
          <img src={phoneIcon} alt="" />
          <span>505-099-655 </span>
        </li>
      </ul>
    </Footer>
  </Layout>
)

export const query = graphql`
  {
    file(name: { eq: "front-image" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
