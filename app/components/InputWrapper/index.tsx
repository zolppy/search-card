export default function inputWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-1">{children}</div>;
}
