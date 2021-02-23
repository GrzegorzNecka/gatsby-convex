import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Kontakt</h1>
  </Layout>
)

// query MyQuery {
//   allFile(filter: {sourceInstanceName: {eq: "icons"}}) {
//     edges {
//       node {
//         extension
//         dir
//         modifiedTime
//       }
//     }
//   }
// }

export default ContactPage
