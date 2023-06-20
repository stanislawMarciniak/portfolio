import React from "react";
import "../styles/global.css";
import Head from "next/head";
import { wrapper } from "../redux/store";
import { useSelector } from "react-redux";
import { selectFoldedState } from "../redux/folder";
import { Portfolio } from "../components/visual-portfolio/Portfolio";
import { createTheme, ThemeProvider } from "@mui/material";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const folded = useSelector(selectFoldedState);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <style>
        {`
          ::-webkit-scrollbar {
            width: ${folded ? "0px" : "10px"};
            height: ${folded ? "0px" : "10px"};
          }

        `}
      </style>
      <ThemeProvider theme={theme}>
        {folded ? (
          <div className="text-dark-foreground">
            <Portfolio />
          </div>
        ) : (
          <div
            className="flex items-center justify-center text-xs text-dark-foreground min-w-max md:min-w-full md:text-base"
            onClick={onClickAnywhere}
          >
            <main className="w-2/3 px-1 py-1 shadow-2xl bg-dark-background rounded-2xl h-5/6">
              <Component {...pageProps} inputRef={inputRef} />
            </main>
          </div>
        )}
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(App);
