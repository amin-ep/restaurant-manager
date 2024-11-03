import styled from "styled-components";
import Form from "../../ui/Form";
import FormControl from "../../ui/FormControl";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import LoginHeader from "./LoginHeader";
import Logo from "../../ui/Logo";
import LoginImage from "./LoginImage";
import LinkButton from "../../ui/LinkButton";
import { LoginPayload } from "../../types/AuthTypes";
import { useAuth } from "../../contexts/AuthContext";

const LoginWrapper = styled.div`
  /* background-image: linear-gradient(
    154deg,
    var(--color-amber-500) 50%,
    var(--color-amber-700) 50%
  ); */
  background: var(--color-sky-200);
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
  } = useForm<LoginPayload>();

  const { login } = useAuth();

  const onSubmit = () => {
    const { email, password } = getValues();
    login({ email: email, password: password });
  };

  return (
    <LoginWrapper>
      <div className={styles.container}>
        <LoginImage />
        <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <LoginHeader>
            <div className={styles["logo-wrapper"]}>
              <Logo size="small" />
              <h1>Pizza Passion</h1>
            </div>
            <h2>Log into your account</h2>
          </LoginHeader>
          <FormControl<LoginPayload>
            errorMessage={errors.email?.message}
            inputId="email"
            name="email"
            register={register}
            validation={{
              required: {
                value: true,
                message: "Please tell us your email!",
              },
              validate: (val) =>
                val.includes("@") || "Please input a valid email",
            }}
            type="text"
            label="Email*"
          />
          <FormControl<LoginPayload>
            errorMessage={errors.password?.message}
            inputId="password"
            name="password"
            register={register}
            validation={{
              required: {
                value: true,
                message: "Please write your password!",
              },
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
              maxLength: {
                value: 12,
                message: "Password should be 12 characters or less",
              },
            }}
            type="password"
            label="Password*"
          ></FormControl>
          <LinkButton type="submit" className={styles["form-submit"]}>
            Login
          </LinkButton>
        </Form>
      </div>
    </LoginWrapper>
  );
}

export default LoginForm;
