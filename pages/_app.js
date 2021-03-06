import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Header from '../src/components/Header';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const title = 'Teste seus conhecimentos sobre Batman Arkham Series';
  const description = 'Quiz criado durante a imersão React Next V2';
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header
          title={title}
          description={description}
          backgroundUrl={db.bg}
        />
        <GlobalStyle />
        { /* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
