import styled from "styled-components"

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.yellow};
  border: none;
  padding: 10px 25px;
  color: ${({ theme }) => theme.color.black};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  flex-shrink: 0;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`

export default Button
