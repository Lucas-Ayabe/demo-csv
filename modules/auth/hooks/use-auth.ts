import { withPreventDefault } from "@shared/utils/hocs";
import { useRef } from "react";

export const useAuth = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitLogin = withPreventDefault(() => {
    const action = formRef.current?.action ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    console.log(email, password);
    const search = new URLSearchParams({ email, password }).toString();
    window.location = `${action}?${search}` as any;
  });

  return {
    formRef,
    emailRef,
    passwordRef,
    onSubmitLogin,
  };
};
