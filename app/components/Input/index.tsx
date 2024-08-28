import type { field as fields } from "@/app/types/field";

interface IInput {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  field: fields;
  handleChange: (field: fields, value: string) => void;
}

export default function Input({
  id,
  type,
  placeholder,
  required,
  value,
  field,
  handleChange,
}: IInput) {
  return (
    <input
      id={id}
      type={type}
      className="border p-2 rounded-lg"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(field, event.target.value)
      }
    />
  );
}
