import LineEffectBackground from "../components/lineEffectBackground/LineEffectBackground";
import LoginForm from "../components/loginForm/LoginForm";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Login() {
  useDocumentTitle("Login");

  return (
    <>
      <LineEffectBackground />
      <LoginForm />
    </>
  );
}

export default Login;
