import Head from 'next/head'

const Metadata = ({ title, description, backgroundUrl}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://batman-quiz.elyssonmr.vercel.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={backgroundUrl} />
    </Head>
  )
}


export default Metadata
