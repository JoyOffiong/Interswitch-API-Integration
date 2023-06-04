import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function InputBox({
  name,
  label,
  className,
  type,
  errors,
  control,
  required,
  placeholder,
  onKeyUp,
  onChange,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!errors}
          className={className}
          helperText={errors?.message}
          variant="outlined"
          placeholder={placeholder}
          required={required}
          fullWidth
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
      )}
    />
  );
}
