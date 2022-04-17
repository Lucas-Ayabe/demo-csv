import { ReactNode } from "react";

import { routes } from "@config";
import { Header } from "./Header";
import Head from "next/head";
import { ThemeToggler } from "./ThemeToggler";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Header links={routes} />
      <main className="container">{children}</main>
      <ThemeToggler />
    </>
  );
};
