export function BlueLink(
  {
    children,
    href,
    className,
  } : {
    children: React.ReactNode,
    href: string,
    className?: string,
  }
) {
  const style = className ? " " + className : "";
  return (
    <a 
      href={href}
      className={"text-sky-600 hover:underline" + style}
    >
      {children}
    </a>
  );
}