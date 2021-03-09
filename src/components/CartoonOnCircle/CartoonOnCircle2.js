import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

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

const ImageOnWhite = styled(Img)`
  height: auto;
  width: 40rem;
  position: absolute !important;
  left: 25%;
  top: 22%;
`

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

const CartoonOnCircle = ({ text, dataName }) => {
  const data = useStaticQuery(graphql`
    query {
      oNas1: file(publicURL: { regex: "/o-nas-1/" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      oNas2: file(publicURL: { regex: "/o-nas-2/" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const { oNas1, oNas2 } = data

  //dataName ==== np. oNas1

  return (
    <CircleWrap>
      <ImageOnWhite fluid={dataName.childImageSharp.fluid} />
      <TextImage>
        <b>{text}</b>
      </TextImage>
    </CircleWrap>
  )
}

export default CartoonOnCircle
