interface IInput {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  handleChange: (name: string, value: string) => void;
}

export default function Input({
  id,
  type,
  placeholder,
  required,
  value,
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
        handleChange(id, event.target.value)
      }
    />
  );
}
