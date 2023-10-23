export function CuteTag(
  {
    children,
  }: {
    children: React.ReactNode,
  }
) {
  return (
    <div
      className="inline-block px-4 py-2 mx-2 my-1 text-xl border-4 rounded-full text-sky-700 border-amber-600"
    >
      {children}
    </div>
  );
}