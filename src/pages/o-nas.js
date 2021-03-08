import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/Button/Button"
import CartoonOnCircle from "../components/CartoonOnCircle/CartoonOnCircle"
import Article from "../components/Article/Article"
// const ArticleImage = styled(Img)`
//   width: 25rem;
//   height: auto;
// `
const articleText = {
  top: `Bardzo duża ilość produktów obecnych na rynku znajduje się w opakowaniu
  kartonowym. Wychodząc naprzeciw tym potrzebom rynkowym od ponad 20 lat
  zajmujemy się produkcją kartonów o różnym przeznaczeniu. Nasze produkty
  dostarczamy głównie do firm z Małopolski. Doradzamy Klientom z jakiego
  rodzaju tektury i w jakim rozmiarze najlepiej wykonać kartony do ich
  produktów. Do produkcji wykorzystujemy najwyższej jakości tektury, aby
  opakowania były możliwie jak najbardziej trwałe i spełniały oczekiwania
  naszych Kontrahentów.`,
  bottom: `Produkty dostosowujemy do potrzeb firm, z którymi współpracujemy. W stałej ofercie posiadamy kartony klapowe, wykrojnikowe i kaszerowane. Ponadto produkujemy takie dodatki jak tacki czy kratownice. U nas znajdą Państwo opakowania cukiernicze, na pizzę, zbiorcze oraz na wiele innych produktów. Aby opakowania były spersonalizowane typowo pod firmę na kartonach wykonujemy nadruki flexo z projektu graficznego, który jest wcześniej przygotowany i zaakceptowany przez Klienta. Oprócz tego wykonujemy indywidualne projekty opakowań zgodnie z wytycznymi Zleceniodawcy, jeśli pudełka kartonowe znajdujące się w naszej ofercie nie spełniają jego oczekiwań.`,
}
const ArticleSection = styled.section`
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

const ImageTop = styled(Img)`
  height: auto;
  width: 40rem;
  position: absolute !important;
  left: 25%;
  top: 22%;
`

const ImageBottom = styled(ImageTop)`
  left: 20%;
  top: 10%;
  width: 30rem;
`

const AboutPage = ({ data }) => {
  const {
    allFile: { nodes },
  } = data

  const abc = nodes.filter(node => {
    // console.log(node.publicURL.endWith("o-nas-1.png"))
    return node.publicURL.endsWith("o-nas-1.png")
    // console.log(node.publicURL.endsWith("o-nas-1.png"))
  })
  console.log("🚀 ~ file: o-nas.js ~ line 62 ~ AboutPage ~ abc ", abc)
  // console.log("🚀 ~ file: o-nas.js ~ line 56 ~ AboutPage ~ nodes", nodes)

  function findNode(text) {
    const result = nodes.filter(node => {
      return node.publicURL.endsWith(text)
    })

    return result
  }

  console.log("🚀 ~ file: o-nas.js ~ line 62 ~ AboutPage ~ abc ", findNode())
  return (
    <Layout isFooter bgGrey>
      <SEO title="o-nas" />
      <ArticleSection className="pt-40 pb-20">
        <ContentWrap>
          <Article
            header="Producent opakowań kartonowych z nadrukiem w Krakowie - Convex"
            articleText={articleText.top}
            buttonText="przejdź do oferty"
          />
        </ContentWrap>
        <ContentWrap>
          <CartoonOnCircle text="Kompleksowa produkcja opakowań kartonowych">
            <ImageTop
              fluid={findNode("o-nas-1.png")[0].childImageSharp.fluid}
            />
          </CartoonOnCircle>
        </ContentWrap>
      </ArticleSection>

      <ArticleSection className="pt-40 pb-40">
        <ContentWrap>
          <CartoonOnCircle text="">
            <ImageBottom
              fluid={findNode("o-nas-2.png")[0].childImageSharp.fluid}
            />
          </CartoonOnCircle>
        </ContentWrap>

        <ContentWrap>
          <Article
            header="Kartony na miarę naszych Klientów"
            articleText={articleText.bottom}
            buttonText="napisz do nas"
          />
        </ContentWrap>
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
