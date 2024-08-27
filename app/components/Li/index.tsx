interface ILi {
  children: React.ReactNode;
  selected: boolean;
  handleToggleSelected: (name: string) => void;
  bankName: string;
}

export default function Li({
  children,
  selected,
  handleToggleSelected,
  bankName,
}: ILi): React.ReactElement {
  return (
    <li
      className={`p-2 bg-blue-500 text-white text-center rounded-md ${
        selected && "bg-blue-700"
      } min-w-[320px] max-w-[430px] w-full`}
      onClick={() => handleToggleSelected(bankName)}
    >
      <span className="pointer-events-none">{children}</span>
    </li>
  );
}
