import { authenticationService as auth } from "@auth/services";
import { ServerSidePropsMiddleware as Middleware } from "@shared/contracts";

export const withAuth: Middleware = (
  getServerSideProps = async () => ({ props: {} })
) => {
  return async (context) => {
    const { query } = context;
    const email = (query?.email as string | null) ?? "";
    const password = (query?.password as string | null) ?? "";
    const isAuthenticated = auth.authenticate(email, password);

    if (!(email && password) || !isAuthenticated) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return getServerSideProps(context);
  };
};
