import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* Catamarran light */}
        <link
          href='https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
        {/* Source sans pro */}
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap'
          rel='stylesheet'
        />
        {/* Poppins */}
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
