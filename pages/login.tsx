import { useAuth } from "@auth/hooks/use-auth";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const { formRef, emailRef, passwordRef, onSubmitLogin } = useAuth();

  return (
    <section>
      <form ref={formRef} action="/" onSubmit={onSubmitLogin}>
        <h1>Login</h1>
        <label>
          <span>E-mail</span>
          <input ref={emailRef} type="email" />
        </label>

        <label>
          <span>Senha</span>
          <input ref={passwordRef} type="password" />
        </label>

        <button>Entrar na conta</button>
      </form>
    </section>
  );
};

export default Login;
