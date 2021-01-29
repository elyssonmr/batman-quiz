/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';
import QuizButton from '../QuizButton';

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  setSelectedAnswer,
  confirmDisabled,
  name,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <p>{`Olá ${name} quero ver se você acerta esse enigma do Charada:`}</p>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={onSubmit}>
          {question.alternatives.map((alternative, index) => (
            <Widget.Topic as="label" key={index}>
              <input
                type="radio"
                name={questionId}
                value={index}
                onChange={(e) => { setSelectedAnswer(e.target.value); }}
              />
              {' '}
              {alternative}
            </Widget.Topic>
          ))}
          <QuizButton text="Confirmar" type="submit" disabled={confirmDisabled} />
        </form>
      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setSelectedAnswer: PropTypes.func.isRequired,
  confirmDisabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default QuestionWidget;
