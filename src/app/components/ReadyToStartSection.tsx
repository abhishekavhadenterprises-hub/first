import Featured_05 from "@/app/components/ui/globe-feature-section";
import { Zap } from "lucide-react";

export function ReadyToStartSection() {
  return (
    <section className="w-full px-6 md:px-5 py-[120px] lg:py-20 md:py-[60px] bg-white transition-all duration-300">
      {/* Responsive Container: Desktop 1200px, Tablet 90%, Mobile 100% */}
      <div className="max-w-[1200px] lg:w-[90%] md:w-full mx-auto">
        {/* Themed Section Heading */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white shadow-sm mb-6">
            <Zap size={12} className="text-[#4EA62F]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#0F172A] uppercase">Action Center</span>
          </div>
          
          <h2 className="text-[#0F172A] mb-8">
            Ready to <span className="text-[#4EA62F] italic">start</span> <br /> 
            <span className="text-black/20 block mt-2">planning?</span>
          </h2>
          
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-tight opacity-70 italic">
            Your global journey begins with a single tactical decision.
          </p>
        </div>
        
        {/* Globe Feature Card */}
        <Featured_05 />
      </div>
    </section>
  );
}
