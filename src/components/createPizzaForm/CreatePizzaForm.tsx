/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormControl from "../../ui/FormControl";
import { CreatePizzaPayload } from "../../types/PizzaTypes";
import styles from "./CreatePizzaForm.module.css";
import FileInput from "../../ui/FileInput";
import LinkButton from "../../ui/LinkButton";
import styled from "styled-components";
import Input from "../../ui/Input";
import { ChangeEvent, useState } from "react";
import { usePizza } from "../../hooks/usePizza";
import IconButtonLink from "../../ui/IconButtonLink";
import { HiPlus } from "react-icons/hi2";

const InputBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

function CreatePizzaForm() {
  const [ingredientInputs, setIngredientInputs] = useState<
    { value: string; index: number }[]
  >([{ value: "", index: 0 }]);

  const { isCreating, createPizzaMutation } = usePizza();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm<CreatePizzaPayload>();

  const handleIngredientInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newIngredientInputs = [...ingredientInputs];
    newIngredientInputs[index] = {
      ...newIngredientInputs[index],
      value: e.target.value,
    };
    setIngredientInputs(newIngredientInputs);
  };

  function onSubmit(data: CreatePizzaPayload) {
    const ingredientsDataArr: string[] = ingredientInputs.map(
      (item) => item.value
    );
    data.imageUrl = data.imageUrl[0];

    if (ingredientsDataArr.length === 0) {
      return;
    } else {
      const payload = new FormData();

      for (const [key, value] of Object.entries(data)) {
        payload.append(key, value);
      }
      for (let i = 0; ingredientsDataArr.length > i; i++) {
        payload.append(`ingredients`, ingredientsDataArr[i]);
      }
      console.log(Object.fromEntries(payload));

      createPizzaMutation(payload);
      reset();
    }
  }

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <header className={styles.header}>
        <h1>Create Pizza</h1>
      </header>
      <InputBox>
        <FormControl
          label="Name*"
          errorMessage={errors.name?.message}
          inputId="name"
          type="text"
          register={register}
          validation={{
            required: {
              value: true,
              message: "Please provide a name for your pizza",
            },
            minLength: {
              value: 5,
              message: "Pizza name must contain at least 5 characters",
            },
            maxLength: {
              value: 25,
              message: "Pizza name must be 25 characters or less",
            },
          }}
          name="name"
        />
        <FormControl
          label="Unit Price*"
          errorMessage={errors.unitPrice?.message}
          inputId="unit-price"
          type="number"
          register={register}
          validation={{
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
      </InputBox>
      <InputBox>
        <FormControl
          label="Discount*"
          errorMessage={errors.discount?.message}
          inputId="discount"
          type="number"
          register={register}
          validation={{
            validate: (val) =>
              val <= getValues().unitPrice ||
              "Discount must be equal or less than unit price",
          }}
          name="discount"
        />

        <FormControl
          label="Inventory*"
          errorMessage={errors.inventory?.message}
          inputId="inventory"
          type="number"
          register={register}
          validation={{
            required: {
              value: true,
              message: "Inventory is required",
            },
          }}
          name="inventory"
        />
      </InputBox>
      <InputBox>
        <div className={styles["ingredients-input-wrapper"]}>
          {ingredientInputs.map((item, index) => (
            <Input
              type="text"
              value={item.value}
              onChange={(e) => {
                handleIngredientInputChange(e, index);
              }}
              key={index}
              className={styles["ingredient-input"]}
              name={`ingredient-${index + 1}`}
            />
          ))}
          <IconButtonLink
            onClick={() => {
              setIngredientInputs([
                ...ingredientInputs,
                {
                  value: "",
                  index:
                    ingredientInputs[ingredientInputs.length - 1].index + 1,
                },
              ]);
            }}
          >
            <HiPlus size={28} />
          </IconButtonLink>
        </div>
        <div className={styles["file-input-container"]}>
          <FileInput
            id="image-url"
            name="imageUrl"
            register={register}
            validation={{
              required: {
                value: false,
                message: "You have to provide an image for your pizza",
              },
            }}
          />
        </div>
      </InputBox>
      <div className={styles["form-actions"]}>
        <LinkButton type="submit">
          {isCreating ? "Creating..." : "Add pizza"}
        </LinkButton>
      </div>
    </Form>
  );
}

export default CreatePizzaForm;
