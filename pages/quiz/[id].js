import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import QuizScreen from '../../src/components/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        questions={dbExterno.questions}
        background={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [quiz, user] = context.query.id.split('___');
  const url = `https://${quiz}.${user}.vercel.app/api/db`;

  const dbExterno = await fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Deu ruim ao converter');
    })
    .then((processedRes) => processedRes);

  return {
    props: {
      dbExterno,
    },
  };
}

QuizDaGaleraPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dbExterno: PropTypes.object.isRequired,
};
