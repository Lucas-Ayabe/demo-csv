import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

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
  return withLayout(<Component {...pageProps} />);
}

export default App;
