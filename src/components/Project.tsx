
export function Project(
  { 
    image, 
    children,
  }: {
    image: string,
    children?: React.ReactNode
  }) {
    return (
      <div className="w-[90vw] lg:w-[45vw] flex flex-col items-center">
        <img className="z-10 w-[70%]" src={image} alt="" />
        <div className="z-0 w-full px-6 pb-4 -mt-10 text-left border-4 pt-14 rounded-2xl border-amber-600">
          <div className="z-20 flex flex-col gap-4">
           {children}
          </div>

        </div>
      </div>
    );
} 