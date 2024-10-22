import { Checkbox } from "@mui/material";

function FormCheckbox({ onChange }: { onChange: () => void }) {
  return (
    <div className="flex items-center">
      <Checkbox
        id="show-password"
        onChange={onChange}
        size="medium"
        sx={{
          color: "var(--color-navy)",
          "&.Mui-checked": {
            color: "var(--color-navy)",
          },
        }}
      />
      <label htmlFor="show-password" className="font-semibold text-navy">
        Show Password
      </label>
    </div>
  );
}

export default FormCheckbox;
