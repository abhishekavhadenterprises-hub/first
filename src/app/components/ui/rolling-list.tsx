import { cn } from "./utils";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: "primary";
}

interface RollingTextItemProps {
  item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
  primary: "text-[#4B6E48]",
};

function RollingTextItem({ item }: RollingTextItemProps) {
  return (
    <div className="group relative w-full cursor-pointer border-b border-[#E2E8F0] py-4 lg:py-4 md:py-3.5 max-md:py-3 transition-all duration-300">
      {/* Desktop Layout: Title left, Category right (>768px) */}
      <div className="hidden md:block">
        <div className="relative overflow-hidden h-[60px] lg:h-[56px]">
          <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
            {/* State 1: Normal */}
            <div className="h-[60px] lg:h-[56px] flex items-center">
              <h2 className="text-[64px] lg:text-[48px] font-black text-[#0F172A] uppercase tracking-tighter leading-[1.1]">
                {item.title}
              </h2>
            </div>

            {/* State 2: Hover (Italic + Color) */}
            <div className="h-[60px] lg:h-[56px] flex items-center">
              <h2
                className={cn(
                  "text-[64px] lg:text-[48px] font-black uppercase tracking-tighter italic leading-[1.1]",
                  colorClassMap[item.color]
                )}
              >
                {item.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Category Label - Desktop */}
        <span className="absolute top-5 lg:top-5 right-0 text-xs font-bold uppercase tracking-[0.15em] text-[#94A3B8] transition-opacity duration-300 group-hover:opacity-0">
          {item.category}
        </span>
      </div>

      {/* Tablet & Mobile Layout (≤768px): Stack vertically with step number on top */}
      <div className="md:hidden flex flex-col items-center text-center">
        {/* Step Number - Tablet/Mobile */}
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-2">
          {item.category}
        </span>

        {/* Title - Tablet/Mobile with refined sizing */}
        <div className="relative overflow-hidden h-[40px] sm:h-[44px]">
          <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
            {/* State 1: Normal */}
            <div className="h-[40px] sm:h-[44px] flex items-center justify-center">
              <h2 className="text-[28px] sm:text-[36px] font-black text-[#0F172A] uppercase tracking-tighter leading-[1.1]">
                {item.title}
              </h2>
            </div>

            {/* State 2: Hover (Italic + Color) */}
            <div className="h-[40px] sm:h-[44px] flex items-center justify-center">
              <h2
                className={cn(
                  "text-[28px] sm:text-[36px] font-black uppercase tracking-tighter italic leading-[1.1]",
                  colorClassMap[item.color]
                )}
              >
                {item.title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Image Reveal Effect - Hidden on tablet/mobile for cleaner layout */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl",
          "transition-all duration-500 ease-out",
          "opacity-0 scale-95 rotate-3 translate-x-4",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0",
          "hidden lg:block"
        )}
      >
        <div className="relative h-full w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[#4B6E48]/10 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

function RollingTextList() {
  const items: ListItem[] = [
    {
      id: 1,
      title: "Discover",
      category: "Step 01",
      src: "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYnJvd3NpbmclMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTI2MTQxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Student browsing universities",
      color: "primary",
    },
    {
      id: 2,
      title: "Apply",
      category: "Step 02",
      src: "https://images.unsplash.com/photo-1762330474636-637ce87b268b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBmaWxsaW5nJTIwYXBwbGljYXRpb24lMjBmb3JtfGVufDF8fHx8MTc2OTI2MTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Filling application form",
      color: "primary",
    },
    {
      id: 3,
      title: "Prepare",
      category: "Step 03",
      src: "https://images.unsplash.com/photo-1567662851835-98c9c2a1180c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdmlzYSUyMHBhc3Nwb3J0fGVufDF8fHx8MTc2OTI2MTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Student visa and passport",
      color: "primary",
    },
    {
      id: 4,
      title: "Depart",
      category: "Step 04",
      src: "https://images.unsplash.com/photo-1760229803660-fc5d996d9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbCUyMGpvdXJuZXl8ZW58MXx8fHwxNzY5MjU1NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Airplane travel journey",
      color: "primary",
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col items-center justify-center px-0 py-6 lg:py-5 md:py-4 max-md:py-3">
      {/* PROCESS Label - Reduced Spacing */}
      <h3 className="mb-5 lg:mb-4 md:mb-3 max-md:mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
        Process
      </h3>
      
      {/* Step List - Responsive Width with granular divider control */}
      <div className="w-full lg:w-[95%] md:w-[95%] max-md:w-[90%] flex flex-col">
        {items.map((item) => (
          <RollingTextItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export { RollingTextList };
