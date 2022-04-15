import type { NextPage } from "next";
import { withAuth } from "@auth/middlewares/with-auth";

export const getServerSideProps = withAuth();

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
