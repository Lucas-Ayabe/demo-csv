import "../modules/shared/styles/app.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Layout } from "../modules/shared/components";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return withLayout(<Component {...pageProps} />);
}

export default App;
