/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Widget from '../Widget';
import QuizButton from '../QuizButton';
import BackLinkArrow from '../BackLinkArrow';

const AlternativeForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    }
  }
`;

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  setSelectedAnswer,
  hasQuestionSelected,
  isCorrect,
  questionSubmitted,
  selectedAnswer,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
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
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <AlternativeForm onSubmit={onSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAnswer === index;
            return (
              <Widget.Topic
                as="label"
                key={index}
                data-selected={isSelected}
                data-status={questionSubmitted && alternativeStatus}
              >
                <input
                  type="radio"
                  style={{ display: 'none' }}
                  name={questionId}
                  onChange={() => { setSelectedAnswer(index); }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <QuizButton text="Confirmar" type="submit" disabled={!hasQuestionSelected} />
          { questionSubmitted && isCorrect && <p>Parabéns você acertou!</p>}
          { questionSubmitted && !isCorrect && <p>Não foi dessa vez</p>}
        </AlternativeForm>
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
  hasQuestionSelected: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  questionSubmitted: PropTypes.bool.isRequired,
  selectedAnswer: PropTypes.number.isRequired,
};

export default QuestionWidget;
