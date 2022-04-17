import React from "react";

export interface FieldProps {
  type?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const Field = ({
  label,
  onChange,
  type = "text",
  value,
}: FieldProps) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};
