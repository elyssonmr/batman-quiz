import React from 'react';
import Head from 'next/head';

// eslint-disable-next-line react/prop-types
const Header = ({ title, description, backgroundUrl }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://batman-quiz.elyssonmr.vercel.app/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={backgroundUrl} />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
  </Head>
);

export default Header;
