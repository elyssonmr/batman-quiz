import styled from 'styled-components'


const LinkButton = styled.a`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 0.8;
  }
  display: block;
`

function QuizButton({url, text}) {
  return <LinkButton href={url}>{text}</LinkButton>
}


export default QuizButton
