import 'antd/dist/antd.css';

import { AppProps } from "next/app";
import { useEffect, useReducer } from "react";
import { Context, initialState } from "../src/context";
import { reducer } from "../src/context/reducers";
import { changeAntdTheme, generateThemeColor } from "dynamic-antd-theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    changeAntdTheme(generateThemeColor(state.primary));
  }, [state.theme,state.primary]);
  return (
    <>
      <Context.Provider value={value}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}
export default MyApp;
