import { GetServerSideProps as GSSP } from "next";

export type ServerSidePropsMiddleware = (fn?: GSSP) => GSSP;
