import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@shared/store";

import { Layout } from "@shared/components";
import "@shared/styles/app.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <Provider store={store}>
      {withLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default App;
