import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Jakub Czekański</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Jakub Czekański" />
        <meta name="description" content="A portfolio page of freelance front-end developer, Jakub Czekański" />
        <meta name="keywords" content="Frontend,Fullstack,Dev,Jakub Czekański" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
<link rel="icon" href="../favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  )
}
