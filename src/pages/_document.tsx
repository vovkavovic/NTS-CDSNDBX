import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { augmentDocumentWithEmotionCache } from '@pages/_app';

function CustomDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({

        enhanceApp: (App) => {
          return (props) => {
            return (
              <App {...props} />
            );
          };
        },

        enhanceComponent: (Component) => {
          return Component;
        },
      });
    };

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return <CustomDocument/>;
  }
}

augmentDocumentWithEmotionCache(MyDocument);

export default MyDocument;
