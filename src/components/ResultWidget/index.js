import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function ResultWidget({ correctAnswers, name }) {
  let title = '';
  let message = '';

  if (correctAnswers) {
    title = `Parabéns ${name}`;
  } else {
    title = `Mais sorte na próxima vez ${name}`;
  }

  if (correctAnswers) {
    if (correctAnswers > 1) {
      message = `Você acertou ${correctAnswers} questões`;
    } else {
      message = `Você acertou ${correctAnswers} questão`;
    }
  } else {
    message = `Os enigmas do Charada são difíceis de decifrar. Tenha mais cuidado na próxima vez ${name}`;
  }

  return (
    <Widget>
      <Widget.Header>
        <h3>{title}</h3>
      </Widget.Header>
      <Widget.Content>
        <p>{message}</p>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ResultWidget;
