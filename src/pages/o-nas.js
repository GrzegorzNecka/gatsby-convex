import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  console.log(data)

  return (
    <Layout isFooter bgGrey>
      <SEO title="o-nas" />

      <h1>o-nas</h1>
      <Img fluid={data.allFile.nodes[0].childImageSharp.fluid} />
      <Img fluid={data.allFile.nodes[1].childImageSharp.fluid} />
    </Layout>
  )
}

// export const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//         name
//       }
//     }
//     file(name: { eq: "front-image" }) {
//       childImageSharp {
//         fluid(maxWidth: 800, quality: 90) {
//           ...GatsbyImageSharpFluid_withWebp_noBase64
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/images/o-nas/" } }) {
      nodes {
        publicURL
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default AboutPage
