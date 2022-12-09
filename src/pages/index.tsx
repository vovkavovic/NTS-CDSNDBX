import Head from 'next/head';

import { useStyles } from '@styles/Home';

function Home() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Vladimir De Vico © 2023 - NTS23</title>
        <meta name="description" content="Next.js Boilerplate to use in Codesandbox created by Vladimir De Vico"/>
        <link rel="canonical" href="http://localhost:3000/"/>
      </Head>

      <main>
        <h1>VDV © 2023 - NTS23</h1>
        <p>
          A strict Next.JS and Typescript boilerplate.
        </p>
      </main>
      <footer>
        <a
          href="https://www.linkedin.com/in/vladimirdevico/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 48,
          }}
          aria-label="Footer powered by link"
        >
          <code>Powered by Vladimir De Vico</code>
        </a>
      </footer>
    </div>
  );
}

export default Home;
