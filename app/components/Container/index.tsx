export default function Container({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="bg-neutral-100 w-full min-h-dvh p-4 text-blue-900 flex flex-col gap-5 min-w-[320px] max-w-[1300px] mx-auto">
      {children}
    </div>
  );
}
