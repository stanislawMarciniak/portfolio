import React, { useEffect, useState } from "react";
import "../styles/global.css";
import Head from "next/head";
import { wrapper } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectFoldedState } from "../redux/folder";
import { Portfolio } from "../components/visual-portfolio/Portfolio";
import { fold } from "../redux/folder";
import Loading from "../components/Loading";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import themeConfig from "../config/theme";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const folded = useSelector(selectFoldedState);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fold());
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

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
      <ChakraProvider theme={themeConfig}>
        {folded ? (
          <div className="text-dark-foreground app">
            <Portfolio />
          </div>
        ) : (
          <div
            className="flex items-center justify-center text-xs text-dark-foreground min-w-max md:min-w-full md:text-base app"
            onClick={onClickAnywhere}
          >
            <main className="w-2/3 px-1 py-1 shadow-2xl bg-dark-background rounded-2xl h-5/6">
              <Component {...pageProps} inputRef={inputRef} />
            </main>
          </div>
        )}
      </ChakraProvider>
    </>
  );
};

export default wrapper.withRedux(App);
