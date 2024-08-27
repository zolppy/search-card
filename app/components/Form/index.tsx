interface IForm {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function Form({ children, handleSubmit }: IForm) {
  return (
    <form
      className="flex flex-col gap-5 min-w-[320px] max-w-[400px] w-full"
      onSubmit={(event: React.FormEvent) => handleSubmit(event)}
    >
      {children}
    </form>
  );
}
