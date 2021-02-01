import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizButton from '../src/components/QuizButton';
import QuizInput from '../src/components/QuizInput';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

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
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quizz da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            {db.external.map((url, index) => {
              const key = `galera__${index}`;
              const [quiz, username] = url
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');
              return (
                <Widget.Topic
                  as={Link}
                  href={`/quiz/${quiz}___${username}`}
                  key={key}
                  disabled={!name}
                >
                  {`${username}/${quiz}`}
                </Widget.Topic>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/elyssonmr/batman-quiz" />
    </QuizBackground>
  );
}
