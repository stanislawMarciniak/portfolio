import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-fixed font-poppins bg-gradient-to-r from-green-700 to-green-400 dark:from-gray-900 dark:to-dark-700 dark:text-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
