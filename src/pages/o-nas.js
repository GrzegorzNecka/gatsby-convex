import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CartoonOnCircle from "../components/CartoonOnCircle/CartoonOnCircle"
import Article from "../components/Article/Article"

const ArticleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const ContentWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 4rem;
`

const ImageTop = styled(Img)`
  height: auto;
  width: 30rem;
  position: absolute !important;
  left: 13%;
  top: 22%;
`

// const ImageBottom = styled(Img)`
//   width: 50%;
//   position: absolute !important;
//   left: 50%;
//   top: 10rem;
//   height: calc(100% - 20rem);

//   & img {
//     object-position: right center !important;
//   }
// `

const ImageBottom = styled(Img)`
  width: calc(50% - 4rem);
  position: absolute !important;
  left: calc(50% + 4rem);
  top: 50%;
  height: calc(100% - 44rem);
  transform: translateY(-50%);

  & img {
    object-position: right center !important;
  }
`

const AboutPage = ({ data }) => {
  const { picture1, picture2, textContent1, textContent2 } = data

  return (
    <Layout isFooter bgGrey>
      <SEO title="o nas" />

      <ArticleSection className="pt-40 pb-20">
        <ContentWrap>
          <Article
            header={textContent1.frontmatter.header}
            articleText={<MDXRenderer>{textContent1.body}</MDXRenderer>}
            buttonText="znajdź nas"
          />
        </ContentWrap>

        <ContentWrap>
          <CartoonOnCircle text="Poznaj firmę Convex">
            <ImageTop fluid={picture1.childImageSharp.fluid} />
          </CartoonOnCircle>
        </ContentWrap>
      </ArticleSection>

      <ArticleSection className="pt-40 pb-40">
        <ContentWrap>
          <Article
            header={textContent2.frontmatter.header}
            articleText={<MDXRenderer>{textContent2.body}</MDXRenderer>}
            buttonText="przejdź do oferty"
          />
        </ContentWrap>
        <ImageBottom fluid={picture2.childImageSharp.fluid} />
      </ArticleSection>
    </Layout>
  )
}

export const query = graphql`
  {
    textContent1: mdx(frontmatter: { title: { regex: "/o-nas-top/" } }) {
      frontmatter {
        header
      }
      body
    }
    picture1: file(publicURL: { regex: "/o-nas-cartoon-1/" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    textContent2: mdx(frontmatter: { title: { regex: "/o-nas-bottom/" } }) {
      frontmatter {
        header
      }
      body
    }
    picture2: file(publicURL: { regex: "/o-nas-fabric-1/" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default AboutPage
