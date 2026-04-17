import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { MoreHorizontal, GraduationCap } from "lucide-react";

import { cn } from "./utils";
import { Card } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

// Define the types for the component props for type-safety and reusability
interface User {
  src: string;
  fallback: string;
}

interface Action {
  Icon: React.ElementType;
  bgColor: string;
}

interface WorkflowBuilderCardProps {
  imageUrl: string;
  status: "Active" | "Inactive";
  lastUpdated: string;
  title: string;
  description: string;
  tags: string[];
  users: User[];
  actions: Action[];
  className?: string;
}

export function WorkflowBuilderCard({
  imageUrl,
  status,
  lastUpdated,
  title,
  description,
  tags,
  users,
  actions,
  className,
  index = 0, // Add index for staggered float
}: WorkflowBuilderCardProps & { index?: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        },
        rotateX: { duration: 0.3 },
        rotateY: { duration: 0.3 }
      }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={cn("w-full h-full", className)}
    >
      <Card className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(78,166,47,0.15)] hover:border-[#4EA62F]/30 transition-all duration-700 h-full flex flex-col relative group">
        {/* Cinematic Header Image */}
        <div className="relative h-[240px] w-full overflow-hidden">
          <motion.img
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Reactive Shine */}
          <motion.div 
            animate={{ 
              x: isHovered ? ['-100%', '100%'] : '-100%',
              opacity: isHovered ? [0, 0.3, 0] : 0
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
          />
          
          <div className="absolute top-6 right-6 z-20">
             <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2">
                <span className={cn("h-1.5 w-1.5 rounded-full", status === "Active" ? "bg-[#4EA62F]" : "bg-red-500")} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">{status}</span>
             </div>
          </div>

          <div className="absolute bottom-6 left-6 text-white z-10">
            <h4 className="text-[24px] font-black leading-tight uppercase tracking-tighter italic">
              {title}
            </h4>
            <div className="flex items-center gap-3">
               <span className="w-8 h-[1px] bg-[#4EA62F]" />
               <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">
                 {description}
               </p>
            </div>
          </div>
        </div>

        {/* Dynamic Card Body */}
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div className="space-y-6">
             <div className="flex justify-between items-center text-black/30 font-bold uppercase text-[9px] tracking-[0.3em]">
                <span>Status Update</span>
                <span>{lastUpdated}</span>
             </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <motion.span 
                    key={tag}
                    whileHover={{ y: -2, backgroundColor: 'rgba(78, 166, 47, 0.1)', borderColor: 'rgba(78, 166, 47, 0.2)', color: '#4EA62F' }}
                    className="px-3 py-1.5 rounded-lg bg-black/5 text-black text-[10px] font-black uppercase tracking-widest border border-black/5 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
             </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
             <div className="flex -space-x-3">
                {users.map((user, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -12, scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-10 w-10 md:h-9 md:w-9 rounded-full border-4 border-white overflow-hidden shadow-sm flex-shrink-0"
                  >
                    <img src={user.src} alt={user.fallback} className="h-full w-full object-cover" />
                  </motion.div>
                ))}
             </div>

             <div className="flex items-center gap-2">
                {actions.map(({ Icon, bgColor }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-lg transition-colors cursor-pointer",
                      bgColor
                    )}
                  >
                    <Icon size={18} />
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
