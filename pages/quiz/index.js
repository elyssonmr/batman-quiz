import React from 'react';
import { ThemeProvider } from 'styled-components';

import db from '../../db.json';
import QuizScreen from '../../src/components/screens/Quiz';

export default function QuizPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        questions={db.questions}
        background={db.bg}
      />
    </ThemeProvider>
  );
}
