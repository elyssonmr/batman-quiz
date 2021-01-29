import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizButton from '../src/components/QuizButton';
import QuizInput from '../src/components/QuizInput';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            Quiz Batman Arkham Series
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={onSubmit}>
              <p>Qual seu nome?</p>
              <QuizInput
                name="nomeDoUsuario"
                placeholder="Dark Knight"
                onChange={(e) => setName(e.target.value)}
              />
              <QuizButton type="submit" url="/quiz" text="Jogar" disabled={name.length === 0} />
            </form>
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
      <GitHubCorner projectUrl="https://github.com/elyssonmr/batman-quiz" />
    </QuizBackground>
  );
}
