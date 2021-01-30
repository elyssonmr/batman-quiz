import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import LoadingWidget from '../src/components/LoadingWidget';
import QuestionWidget from '../src/components/QuestionWidget';
import ResultWidget from '../src/components/ResultWidget';

const screenStates = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const router = useRouter();
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const { name } = router.query;
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const hasQuestionSelected = selectedAnswer !== undefined;
  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  const isCorrect = parseInt(selectedAnswer, 10) === question.answer;

  const onSubmit = (e) => {
    e.preventDefault();
    setQuestionSubmitted(true);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < db.questions.length) {
      setTimeout(() => {
        setQuestionIndex(nextQuestion);
        setSelectedAnswer(undefined);
        setQuestionSubmitted(false);
      }, 2500);
    } else {
      setTimeout(() => {
        setScreenState(screenStates.RESULT);
        setQuestionSubmitted(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.LOADED);
    }, 1000);
    setSelectedAnswer(undefined);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADED && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={onSubmit}
            setSelectedAnswer={setSelectedAnswer}
            hasQuestionSelected={hasQuestionSelected}
            name={name}
            questionSubmitted={questionSubmitted}
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <ResultWidget correctAnswers={correctAnswers} name={name} />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/elyssonmr/batman-quiz" />
    </QuizBackground>
  );
}
