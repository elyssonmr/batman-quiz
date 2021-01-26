import styled from 'styled-components'
import Head from 'next/head'

import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import QuizButton from '../src/components/QuizButton'
import QuizInput from '../src/components/QuizInput'
import Metadata from '../src/components/Metadata'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`


export default function Home() {
  const title = 'Teste seus conhecimentos sobre Batman Arkham Series'
  const description = 'Quiz criado durante a imersão React Next V2'
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Metadata title={title} description={description} backgroundUrl={db.bg} />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            Quiz Batman Arkham Series
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <p>Qual seu nome?</p>
            <QuizInput placeholder='Dark Knight' />
            <QuizButton url='' text='Começar'/>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Pontuação</h1>

            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/elyssonmr/batman-quiz'/>
    </QuizBackground>
  )
}
