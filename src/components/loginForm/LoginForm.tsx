import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { LoginPayload } from "../../types/AuthTypes";
import Form from "../ui/Form";
import FormControl from "../ui/FormControl";
import LinkButton from "../ui/LinkButton";
import Loading from "../ui/Loading";
import styles from "./LoginForm.module.css";
import LoginHeader from "./LoginHeader";

function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginPayload>();

  const { login, isLoading } = useAuth();

  const onSubmit = (data: LoginPayload) => {
    const { email, password } = data;
    login({ email: email, password: password });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        background: "var(--color-gray-50)",
        margin: "6rem auto",
        display: "flex",
        alignItems: "center",
        position: "relative",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        opacity: 0.9,
      }}
    >
      <span className={`${styles.border} ${styles["border-top"]}`}></span>
      <span className={`${styles.border} ${styles["border-right"]}`}></span>
      <span className={`${styles.border} ${styles["border-bottom"]}`}></span>
      <span className={`${styles.border} ${styles["border-left"]}`}></span>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LoginHeader />
        <FormControl<LoginPayload>
          errorMessage={errors.email?.message}
          inputId="email"
          name="email"
          register={register}
          registerOptions={{
            required: {
              value: true,
              message: "Please tell us your email!",
            },
            validate: (val: string) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
              "Please input a valid email",
          }}
          type="email"
          label="Email*"
        />
        <FormControl<LoginPayload>
          errorMessage={errors.password?.message}
          inputId="password"
          name="password"
          register={register}
          registerOptions={{
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
        />
        <LinkButton
          disabled={isLoading}
          type="submit"
          className={styles["form-submit"]}
        >
          {isLoading && <Loading />}
          Login
        </LinkButton>
      </Form>
    </Container>
  );
}

export default LoginForm;
