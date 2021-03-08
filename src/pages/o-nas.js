import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button/Button"

const ArticleImage = styled(Img)`
  width: 25rem;
  height: auto;
`

const ArticleSection = styled.section`
  padding-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArticletWrap = styled(ContentWrap)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const CircleWrap = styled.div`
  background: white;
  width: 30rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position: relative;
`

const ImageOnWhite = styled(ArticleImage)`
  width: 30rem;
  position: absolute !important;
  left: 25%;
  top: 22%;
`

const TextImage = styled.p`
  position: absolute;
  width: 15rem;
  height: 15rem;
  /* background: red; */
  left: 25%;
  top: 22%;
  padding: 2rem;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`

const AboutPage = ({ data }) => {
  const {
    allFile: { nodes },
  } = data

  return (
    <Layout isFooter bgGrey>
      <SEO title="o-nas" />
      <ArticleSection>
        <ArticletWrap>
          <h1>
            Producent opakowań kartonowych z nadrukiem w Krakowie - Convex
          </h1>
          <article>
            Bardzo duża ilość produktów obecnych na rynku znajduje się w
            opakowaniu kartonowym. Wychodząc naprzeciw tym potrzebom rynkowym od
            ponad 20 lat zajmujemy się produkcją kartonów o różnym
            przeznaczeniu. Nasze produkty dostarczamy głównie do firm z
            Małopolski. Doradzamy Klientom z jakiego rodzaju tektury i w jakim
            rozmiarze najlepiej wykonać kartony do ich produktów. Do produkcji
            wykorzystujemy najwyższej jakości tektury, aby opakowania były
            możliwie jak najbardziej trwałe i spełniały oczekiwania naszych
            Kontrahentów.
          </article>
          <Button>SPRAWDŹ NASZĄ OFERTĘ</Button>
        </ArticletWrap>
        <ContentWrap>
          <CircleWrap>
            <ImageOnWhite fluid={nodes[2].childImageSharp.fluid} />
            <TextImage>Kompleksowa produkcja opakowań kartonowych</TextImage>
          </CircleWrap>
        </ContentWrap>
      </ArticleSection>

      <ArticleSection>
        <ArticleImage fluid={nodes[3].childImageSharp.fluid} />
      </ArticleSection>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/images/o-nas/" } }) {
      nodes {
        publicURL
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default AboutPage
