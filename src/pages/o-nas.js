import React from "react"
// import { graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/Button/Button"
import CartoonOnCircle from "../components/CartoonOnCircle/CartoonOnCircle"
import Article from "../components/Article/Article"
// const ArticleImage = styled(Img)`
//   width: 25rem;
//   height: auto;
// `

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

const AboutPage = () => {
  // const {
  //   allFile: { nodes },
  // } = data
  return (
    <Layout isFooter bgGrey>
      <SEO title="o-nas" />
      <ArticleSection className="pt-40 pb-20">
        <ContentWrap>
          <Article
            header="Producent opakowań kartonowych z nadrukiem w Krakowie - Convex"
            articleText=" Bardzo duża ilość produktów obecnych na rynku znajduje się w opakowaniu
      kartonowym. Wychodząc naprzeciw tym potrzebom rynkowym od ponad 20 lat
      zajmujemy się produkcją kartonów o różnym przeznaczeniu. Nasze produkty
      dostarczamy głównie do firm z Małopolski. Doradzamy Klientom z jakiego
      rodzaju tektury i w jakim rozmiarze najlepiej wykonać kartony do ich
      produktów. Do produkcji wykorzystujemy najwyższej jakości tektury, aby
      opakowania były możliwie jak najbardziej trwałe i spełniały oczekiwania
      naszych Kontrahentów."
            buttonText="przejdź do oferty"
          />
        </ContentWrap>
        <ContentWrap>
          <CartoonOnCircle
            text="Kompleksowa produkcja opakowań kartonowych"
            nodeNumber={2}
          />
        </ContentWrap>
      </ArticleSection>

      <ArticleSection>
        {/* <ArticleImage fluid={nodes[3].childImageSharp.fluid} /> */}
      </ArticleSection>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allFile(filter: { absolutePath: { regex: "/images/o-nas/" } }) {
//       nodes {
//         publicURL
//         childImageSharp {
//           fluid(maxWidth: 300, quality: 100) {
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
// `

export default AboutPage
