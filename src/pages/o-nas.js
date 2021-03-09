import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import Button from "../components/Button/Button"
import CartoonOnCircle from "../components/CartoonOnCircle/CartoonOnCircle"
import Article from "../components/Article/Article"


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
  const { picture1, picture2, textContent1, textContent2 } = data
console.log(textContent1, textContent2)
  return (
    <Layout isFooter bgGrey>
      <SEO title="o-nas" />
      <ArticleSection className="pt-40 pb-20">
        <ContentWrap>
          <Article
            header={textContent1.frontmatter.header}
            articleText={<MDXRenderer>{textContent1.body}</MDXRenderer>}
            buttonText="przejdź do oferty"
          />
        </ContentWrap>
        <ContentWrap>
          <CartoonOnCircle text="Kompleksowa produkcja opakowań kartonowych">
            <ImageTop fluid={picture1.childImageSharp.fluid} />
          </CartoonOnCircle>
        </ContentWrap>
      </ArticleSection>

      <ArticleSection className="pt-40 pb-40">
        <ContentWrap>
          <CartoonOnCircle text="">
            <ImageBottom fluid={picture2.childImageSharp.fluid} />
          </CartoonOnCircle>
        </ContentWrap>

        <ContentWrap>
          <Article
            header={textContent2.frontmatter.header}
            articleText={<MDXRenderer>{textContent2.body}</MDXRenderer>}
            buttonText="napisz do nas"
          />
        </ContentWrap>
      </ArticleSection>
    </Layout>
  )
}


export const query = graphql`
  {
    picture1: file(publicURL: { regex: "/o-nas-1/" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    picture2: file(publicURL: { regex: "/o-nas-2/" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    textContent1: mdx(frontmatter: {title: {regex: "/o-nas-1/"}}) {
      frontmatter{
        header
      }
      body
    
    }
      textContent2: mdx(frontmatter: {title: {regex: "/o-nas-2/"}}) {
        frontmatter{
          header
        }
        body
     
    }
  }
`

export default AboutPage
