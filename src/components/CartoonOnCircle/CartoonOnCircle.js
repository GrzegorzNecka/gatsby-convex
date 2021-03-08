import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"

const CircleWrap = styled.div`
  background: white;
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position: relative;
`

// const ImageOnWhite = styled(Img)`
//   height: auto;
//   width: 40rem;
//   position: absolute !important;
//   left: 25%;
//   top: 22%;

//   ${props =>
//     props.addStyles &&
//     css`
//       left: 20%;
//       top: 10%;
//       width: 30rem;
//     `}
// `

const TextImage = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  /* background: red;  */
  left: 25%;
  top: 22%;
  padding: 2rem;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.8rem;

  & b {
    width: min-content;
  }
`

const CartoonOnCircle = ({ text, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
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
  // `)

  // const {
  //   allFile: { nodes },
  // } = data
  // console.log(
  //   "🚀 ~ file: CartoonOnCircle.js ~ line 65 ~ CartoonOnCircle ~ data",
  //   data
  // )

  return (
    <CircleWrap>
      {children}
      <TextImage>
        <b>{text}</b>
      </TextImage>
    </CircleWrap>
  )
}

export default CartoonOnCircle
