import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormControl from "../../ui/FormControl";
import { UpdatePizzaPayload } from "../../types/PizzaTypes";
import { useState, ChangeEvent, useEffect } from "react";
import IconButtonLink from "../../ui/IconButtonLink";
import Input from "../../ui/Input";
import { HiPlus } from "react-icons/hi2";
import LinkButton from "../../ui/LinkButton";
import styles from "./UpdatePizzaForm.module.css";
import { toast } from "react-toastify";
import { usePizza } from "../../hooks/usePizza";
import UpdatePizzaFileInput from "./UpdatePizzaFileInput";
import Loading from "../../ui/Loading";

function UpdatePizzaForm({
  defaultValues,
  id,
  close,
}: {
  defaultValues: UpdatePizzaPayload;
  id: string;
  close: () => void;
}) {
  const [ingredientInputs, setIngredientInputs] = useState<
    { value: string; index: number }[]
  >([]);
  const [selectedImage, setSelectedImage] = useState<
    string | Blob | MediaSource
  >("");

  const { updatePizzaMutation, isUpdatingPizza } = usePizza();

  useEffect(() => {
    if (defaultValues && defaultValues.ingredients) {
      const ingredientDefaultValues = Array(defaultValues.ingredients.length)
        .fill(null)
        .map((_, index) => ({
          value: defaultValues.ingredients![index],
          index: index,
        }));
      setIngredientInputs(ingredientDefaultValues);
    }
  }, [defaultValues]);

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

  const {
    formState: { errors },
    register,
    watch,
    handleSubmit,
  } = useForm<UpdatePizzaPayload>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: UpdatePizzaPayload) => {
    data.ingredients = ingredientInputs.map((item) => item.value);
    data.ingredients.forEach((el, index) => {
      if (el === "") {
        data.ingredients?.splice(index, index + 1);
      }
    });

    data.imageUrl =
      selectedImage === "" ? defaultValues.imageUrl : selectedImage;

    let sumDataChanges = 0;
    for (let i = 0; Object.values(defaultValues).length > i; i++) {
      if (Object.values(data)[i] !== Object.values(defaultValues)[i]) {
        const changedValueKey = Object.keys(data)[i];
        if (changedValueKey !== "ingredients") {
          sumDataChanges++;
        }

        if (
          changedValueKey === "ingredients" &&
          data.ingredients.toString() !== defaultValues.ingredients?.toString()
        ) {
          sumDataChanges++;
        }
      }
    }

    if (sumDataChanges === 0) {
      toast.error("change some values to update this pizza");
    } else {
      const payload = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (key === "ingredients") {
          continue;
        }
        payload.append(key, value);
      }

      data.ingredients.forEach((el, index) => {
        payload.append(`ingredients[${index}]`, el);
      });

      updatePizzaMutation({ id: id, payload: payload });
      close();
    }
  };

  return (
    <>
      <div>
        <h1>Update {defaultValues.name}</h1>
      </div>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <UpdatePizzaFileInput
          defaultValue={
            typeof defaultValues.imageUrl === "string"
              ? defaultValues.imageUrl
              : ""
          }
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <FormControl
          watch={watch}
          errorMessage={errors.name?.message}
          label="Name"
          name="name"
          inputId="name"
          register={register}
          type="text"
          validation={{
            minLength: {
              value: 5,
              message: "Pizza name must contain at least 5 characters",
            },
            maxLength: {
              value: 25,
              message: "Pizza name must be 25 characters or less",
            },
          }}
        />
        <FormControl
          watch={watch}
          label="Unit Price*"
          errorMessage={errors.unitPrice?.message}
          inputId="unit-price"
          type="number"
          register={register}
          validation={{
            required: {
              value: false,
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
        <FormControl
          watch={watch}
          label="Discount*"
          errorMessage={errors.discount?.message}
          inputId="discount"
          type="number"
          register={register}
          validation={{
            validate: (val: number) =>
              val <= defaultValues.unitPrice! ||
              "Discount must be equal or less than unit price",
          }}
          name="discount"
        />
        {ingredientInputs.map((item, index) => (
          <Input
            type="text"
            value={item.value}
            onChange={(e) => {
              handleIngredientInputChange(e, index);
            }}
            key={index}
            name={`ingredient-${index + 1}`}
          />
        ))}
        <IconButtonLink
          title="Add Ingredient"
          onClick={() => {
            setIngredientInputs([
              ...ingredientInputs,
              {
                value: "",
                index: ingredientInputs[ingredientInputs.length - 1].index + 1,
              },
            ]);
          }}
        >
          <HiPlus size={28} />
        </IconButtonLink>
        <LinkButton type="submit">
          {isUpdatingPizza && <Loading />} Update
        </LinkButton>
      </Form>
    </>
  );
}

export default UpdatePizzaForm;
