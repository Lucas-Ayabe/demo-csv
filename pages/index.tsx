import type { NextPage } from "next";
import { withAuth } from "@auth/middlewares/with-auth";
import { withPreventDefault } from "@shared/hocs";
import { useRef } from "react";

interface HomeProps {
  email: string;
  password: string;
}

export const getServerSideProps = withAuth(async (context) => {
  console.log(context.query);
  return {
    props: {
      email: context.query?.email ?? "",
      password: context.query?.password ?? "",
    },
  };
});

const Home: NextPage<HomeProps> = ({ email, password }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async () => {
    const endpoint = formRef.current?.action ?? "";
    const response = await fetch(endpoint, {
      method: formRef.current?.method ?? "POST",
      body: new FormData(formRef.current as HTMLFormElement),
    });

    const importedCsv = await response.json();
    localStorage.setItem("importedCsv", JSON.stringify(importedCsv));
    window.location = `/statistics?email=${email}&password=${password}` as any;
  };

  return (
    <div>
      <h1>Importar Estátisticas</h1>
      <form
        action="/api/statistics/import"
        encType="multipart/form-data"
        method="POST"
        ref={formRef}
        onSubmit={withPreventDefault(onSubmit)}
      >
        <label>
          <span>Arquivo deve estar em formato CSV</span>
          <input type="file" name="csv" />
        </label>

        <button className="is-inline">Enviar estátisticas</button>
      </form>
    </div>
  );
};

export default Home;
