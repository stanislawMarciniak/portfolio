import React from "react";
import "../styles/global.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [folded, setFolded] = React.useState(false);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  const toggleFold = () => {
    setFolded(!folded);
  };

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>

      <div
        className="flex items-center justify-center text-xs text-dark-foreground min-w-max md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main
          className={` px-2 py-1 shadow-2xl ${
            folded ? "h-28 w-500px" : "h-5/6 w-2/3"
          } bg-dark-background rounded-2xl`}
        >
          <Component {...pageProps} inputRef={inputRef} />
          <button onClick={toggleFold}>fold</button>
        </main>
      </div>
    </Provider>
  );
};

export default App;
