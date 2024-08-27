interface IForm {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function Form({ children, handleSubmit }: IForm) {
  return (
    <form
      className="flex flex-col gap-4 min-w-[318px] max-w-[430px] w-full"
      onSubmit={(event: React.FormEvent) => handleSubmit(event)}
    >
      {children}
    </form>
  );
}
