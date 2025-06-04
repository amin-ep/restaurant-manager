import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import ReactSelect, { GroupBase, OptionsOrGroups } from "react-select";

type Option = {
  value: string;
  label: string;
};

function Select<T extends FieldValues>({
  options,
  name,
  rules,
  control,
  placeholder,
}: {
  options: OptionsOrGroups<Option, GroupBase<Option>> | undefined;
  name: Path<T>;
  rules: RegisterOptions<T>;
  control: Control<T>;
  placeholder: string;
}) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field }) => (
        <ReactSelect
          onChange={(newValue) => {
            const value: string[] = newValue.map((val) => val.value);
            field.onChange(value);
          }}
          isMulti
          options={options}
          closeMenuOnSelect={false}
          styles={{
            menu: (provided) => ({
              ...provided,
              zIndex: 10,
              maxHeight: "100px",
            }),
            option: (provided) => ({
              ...provided,
              background: "var(--color-gray-50)",
              color: "var(--color-gray-900)",
              zIndex: 10,
              cursor: "pointer",
              ":hover": {
                background: "var(--color-gray-100)",
              },
            }),
            menuList: (base) => ({
              ...base,
              zIndex: 10,
              background: "var(--color-gray-50)",
            }),
            control: (base) => ({
              ...base,
              background: "var(--color-gray-50)",
              color: "var(--color-gray-900)",
              ":hover": {
                boxShadow: "none",
                borderColor: "var(--color-emerald-500)",
              },
              ":focus": {
                borderColor: "var(--color-emerald-500)",
              },
              boxShadow: "none",
              borderColor: "var(--color-gray-200)",
            }),
            multiValue: (base) => ({
              ...base,
              background: "var(--color-gray-200)",
            }),
            multiValueLabel(base) {
              return {
                ...base,
                color: "var(color-gray-900)",
              };
            },
            input: (base) => ({
              ...base,
              color: "var(--color-gray-900)",
            }),
          }}
          noOptionsMessage={() => "No Ingredient is available"}
          placeholder={placeholder}
        />
      )}
    />
  );
}

export default Select;
