import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizButton from '../src/components/QuizButton';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            Quiz Batman Arkham Series
          </Widget.Header>
          <Widget.Content>
            <h1>Em breve...</h1>
            <p>
              Bem vindo
              {name}
            </p>
            <p>Os enigmas do Charada ainda estão sendo decifrados.</p>
            <QuizButton url="/" text="Voltar" />
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/elyssonmr/batman-quiz" />
    </QuizBackground>
  );
}
