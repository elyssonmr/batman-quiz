import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Footer from '../../Footer';
import GitHubCorner from '../../GitHubCorner';
import QuizBackground from '../../QuizBackground';
import QuizLogo from '../../QuizLogo';
import QuizContainer from '../../QuizContainer';
import LoadingWidget from '../../LoadingWidget';
import QuestionWidget from '../../QuestionWidget';
import ResultWidget from '../../ResultWidget';

const screenStates = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  RESULT: 'RESULT',
};

export default function QuizScreen({ questions, background }) {
  const router = useRouter();
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const { name } = router.query;
  const totalQuestions = questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
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
    if (nextQuestion < totalQuestions) {
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
    <QuizBackground backgroundImage={background}>
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

QuizScreen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  background: PropTypes.string.isRequired,
};
