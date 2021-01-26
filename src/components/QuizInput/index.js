import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  margin-bottom: 10px;
  font-size: 14px;
`


function QuizInput({placeholder, type}) {
  type = type ? type : 'text'
  return <Input placeholder={placeholder} type={type}/>
}

export default QuizInput
