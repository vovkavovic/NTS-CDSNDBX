import Head from 'next/head';
import Link from 'next/link';

import items from '@components/__form/data.json';
import Form from '@components/__form/index';
import { useStyles } from '@styles/Home';
import { Field } from '@types';

function Contact() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Next.js Boilerplate to use in Codesandbox created by Vladimir De Vico"/>
        <link rel="canonical" href="http://localhost:3000/"/>
      </Head>

      <main>
        <h1>Welcome to Contact</h1>
        <p>
          A strict Next.JS and Typescript boilerplate.
        </p>
        <Link href="/contact">Contact Page</Link>
        <Form fields={items as Field[]}/>
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

export default Contact;
