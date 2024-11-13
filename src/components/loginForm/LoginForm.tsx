import Form from "../../ui/Form";
import FormControl from "../../ui/FormControl";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import LoginHeader from "./LoginHeader";
import LinkButton from "../../ui/LinkButton";
import { LoginPayload } from "../../types/AuthTypes";
import { useAuth } from "../../contexts/AuthContext";
import { Container } from "@mui/material";

function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    watch,
  } = useForm<LoginPayload>();

  const { login } = useAuth();

  const onSubmit = () => {
    const { email, password } = getValues();
    login({ email: email, password: password });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        background: "var(--color-gray-0)",
        margin: "6rem auto",
        display: "flex",
        alignItems: "center",
        padding: "1rem 2.5rem",
        position: "relative",
      }}
    >
      <span className={`${styles.border} ${styles["border-top"]}`}></span>
      <span className={`${styles.border} ${styles["border-right"]}`}></span>
      <span className={`${styles.border} ${styles["border-bottom"]}`}></span>
      <span className={`${styles.border} ${styles["border-left"]}`}></span>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LoginHeader />
        <FormControl<LoginPayload>
          watch={watch}
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
          watch={watch}
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
    </Container>
  );
}

export default LoginForm;
