interface ILabel {
  children: React.ReactNode;
  htmlFor: string;
}

export default function Label({ children, htmlFor }: ILabel) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
