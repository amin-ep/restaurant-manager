import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createPizza, updatePizzaById } from "../../services/pizzaApi";
import { AxiosDataErrorProps } from "../../types/AxiosTypes";
import { IPizza, PizzaPayload } from "../../types/PizzaTypes";
import { pizzaIngredients } from "../../utils/constants";
import CounterControl from "../counterControl/CounterControl";
import FileInput from "../ui/FileInput";
import Form from "../ui/Form";
import FormControl from "../ui/FormControl";
import LinkButton from "../ui/LinkButton";
import Loading from "../ui/Loading";
import Select from "../ui/Select";
import styles from "./PizzaForm.module.css";
import { useEffect } from "react";

const Wrapper = styled.div<{ open: "true" | "false" }>`
  width: 100%;
  background: var(--color-gray-50);
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-gray-200);
  display: ${(props) => (props.open === "true" ? "block" : "none")};

  @media (min-width: 640px) {
    padding: 0.75rem;
  }

  @media (min-width: 768px) {
    padding: 1;
  }
`;

function PizzaForm({
  isOpen,
  mode = "create",
  initialData,
}: {
  isOpen: boolean;
  mode?: "create" | "edit";
  initialData?: IPizza;
}) {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    control,
    reset,
    setValue,
  } = useForm<PizzaPayload>();

  const queryClient = useQueryClient();

  const { mutate: createPizzaMutation, isLoading: isCreating } = useMutation({
    mutationKey: ["pizza"],
    mutationFn: createPizza,
    onSuccess(data) {
      if (data.status === 201) {
        toast.success("Your new pizza added successfully");
        queryClient
          .invalidateQueries({
            queryKey: ["pizzas"],
          })
          .then(() => {
            reset();
          });
      } else {
        const err = data as AxiosError<AxiosDataErrorProps>;
        toast.error(err.response?.data.message || "Something went wrong!");
      }
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  // Update Pizza
  const { mutate: updatePizzaMutation, isLoading: isUpdatingPizza } =
    useMutation({
      mutationFn: updatePizzaById,
      mutationKey: ["pizza"],
      onSuccess() {
        queryClient.invalidateQueries(["pizza", "pizzas"]);
      },
      onError(err: AxiosError<AxiosDataErrorProps>) {
        toast.error(err.response?.data.message || "Something went wrong!");
      },
    });

  useEffect(() => {
    if (mode === "edit") {
      reset({
        discount: initialData?.discount,
        imageUrl: initialData?.imageUrl,
        ingredients: initialData?.ingredients,
        name: initialData?.name,
        unitPrice: initialData?.unitPrice,
      });
    }
  }, [mode, initialData, reset]);

  function onSubmit(data: PizzaPayload) {
    data.imageUrl = data.imageUrl[0];

    const formData = new FormData();

    if (!data.discount) {
      delete data.discount;
    }

    for (const [key, value] of Object.entries(data)) {
      if (key === "ingredients") {
        (value as string[]).forEach((el, idx) =>
          formData.append(`${key}[${idx}]`, el)
        );
      } else {
        formData.append(key, value);
      }
    }

    if (mode === "create") {
      createPizzaMutation(formData);
    } else if (mode === "edit" && (initialData as IPizza)) {
      updatePizzaMutation({
        id: initialData?._id as string,
        payload: formData,
      });
    }
  }

  return (
    <Wrapper open={isOpen ? "true" : "false"}>
      <header className={styles.header}>
        <h1>
          {mode === "create"
            ? "Create Pizza"
            : initialData && `Edit "${initialData.name}"`}
        </h1>
      </header>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["file-input-container"]}>
          <FileInput<PizzaPayload>
            id="image-url"
            name="imageUrl"
            register={register}
            registerOptions={{
              required: {
                value: false,
                message: "You have to provide an image for your pizza",
              },
              validate: (val) => {
                return val.length > 0 || "Please provide a valid image";
              },
            }}
            label="Image"
            errorMessage={errors.imageUrl?.message}
          />
        </div>
        <FormControl<PizzaPayload>
          label="Pizza name"
          errorMessage={errors.name?.message}
          inputId="pizza-name"
          type="text"
          register={register}
          registerOptions={{
            required: {
              value: true,
              message: "Please provide a name for your pizza",
            },
            minLength: {
              value: 4,
              message: "Pizza name must contain at least 4 characters",
            },
            maxLength: {
              value: 50,
              message: "Pizza name must be 50 characters or less",
            },
          }}
          name="name"
        />
        <CounterControl
          inputId="unit-price"
          initialValue={initialData?.unitPrice}
          setValue={setValue}
          label="Unit price"
          errorMessage={errors.unitPrice?.message}
          register={register}
          registerOptions={{
            required: {
              value: true,
              message: "Please provide a unit price for your pizza",
            },
            min: {
              value: 10,
              message: "A pizza is more expensive than 10 dollars",
            },
            max: {
              value: 250,
              message: "Unit price cannot be more than 250 dollars",
            },
          }}
          name="unitPrice"
        />

        <CounterControl
          inputId="discount"
          initialValue={initialData?.discount}
          setValue={setValue}
          name="discount"
          register={register}
          label="Discount"
          errorMessage={errors.discount?.message}
          registerOptions={{
            validate: (val: string) => {
              return (
                Number(val) < Number(getValues().unitPrice) || "error message"
              );
            },
          }}
        />

        {/* INGREDIENTS */}
        <Select
          control={control}
          name="ingredients"
          rules={{
            required: {
              value: true,
              message: "Ingredients is required",
            },
            validate: (val) => {
              return (
                (val && val.length >= 3) ||
                "Each pizza should contain at least 3 items"
              );
            },
          }}
          options={pizzaIngredients}
          placeholder="Ingredients..."
        />

        <div className={styles["form-actions"]}>
          <LinkButton type="submit" className={styles.submit}>
            {isCreating || isUpdatingPizza ? <Loading /> : mode}
          </LinkButton>
        </div>
      </Form>
    </Wrapper>
  );
}

export default PizzaForm;
