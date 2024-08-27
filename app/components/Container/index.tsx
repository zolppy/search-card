export default function Container({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="bg-neutral-100 w-full min-h-dvh p-4 text-blue-900 flex flex-col gap-5 min-w-[350px] max-w-[2000px] mx-auto">
      {children}
    </div>
  );
}
