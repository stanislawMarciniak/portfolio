import React from "react";
import "../styles/global.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div
        className="flex items-center justify-center text-xs text-light-foreground dark:text-dark-foreground min-w-max md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="w-2/3 p-2 h-5/6 bg-light-background dark:bg-dark-background rounded-2xl">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
