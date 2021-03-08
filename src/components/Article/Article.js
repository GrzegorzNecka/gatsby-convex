import React from "react"
import Button from "./../Button/Button"
import styled from "styled-components"

const ArticletWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const ArticleContent = styled.article`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: justify;
  text-justify: inter-word;
`
const ArticleButton = styled(Button)`
  align-self: flex-end;
`

const Article = ({ header, articleText, buttonText }) => (
  <ArticletWrap>
    <Header className="p-8">{header}</Header>
    <ArticleContent className="p-8">{articleText}</ArticleContent>
    <ArticleButton className="m-8">{buttonText}</ArticleButton>
  </ArticletWrap>
)

export default Article
