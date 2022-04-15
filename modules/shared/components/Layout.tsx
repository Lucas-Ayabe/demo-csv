import { ReactNode } from "react";
import Head from "next/head";

import { routes } from "@config";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Demo</title>
        <meta name="description" content="demo" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
        />
      </Head>

      <Header links={routes} />
      <main className="container">{children}</main>
    </div>
  );
};
