export function Card(
  { 
    title, 
    children,
  }: {
    title: string,
    children?: React.ReactNode
  }) {
    return (
      <div className="w-[90vw] lg:w-[45vw] flex flex-col items-center">
        <div className="z-10 w-[70%] text-center border-4 rounded-2xl border-amber-600 text-[--color] text-lg sm:text-xl md:text-2xl py-4 bg-opacity-1 bg-[--bg-color]" >
          {title}
        </div>
        <div className="z-0 w-full px-6 pb-4 -mt-10 text-left border-4 pt-14 rounded-2xl border-amber-600">
          <div className="z-20 flex flex-col gap-4">
           {children}
          </div>

        </div>
      </div>
    );
} 