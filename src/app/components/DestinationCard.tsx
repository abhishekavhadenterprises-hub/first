import { motion } from 'motion/react';
import { Plane } from 'lucide-react';
import { GlassButton } from '@/app/components/ui/glass-button';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  imageUrl: string;
  location: string;
  countryCode: string;
  stats: string;
  href: string;
  flagUrl: string;
  delay: number;
}

export function DestinationCard({
  imageUrl,
  location,
  countryCode,
  stats,
  href,
  flagUrl,
  delay,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Link to={href} className="block group h-full">
        {/* Flexible height container with aspect ratio */}
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[16px] max-md:rounded-[14px] aspect-[4/3] md:aspect-[4/3.2] max-md:aspect-[16/11] h-full transition-all duration-300">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={location}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          </div>
          
          {/* Adaptive Gradient Overlay - Stronger on mobile for better text readability */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              background: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 100%)',
              opacity: 0.85
            }}
          />
          
          {/* Extra gradient for mobile to ensure text readability */}
          <div 
            className="absolute inset-0 md:hidden transition-opacity duration-300"
            style={{ 
              background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
              opacity: 0.5
            }}
          />

          {/* Hover: Darker Overlay */}
          <div 
            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300"
          />

          {/* Card Content - Always Visible - Responsive Padding */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-5 max-md:p-5 text-white">
            {/* Top Content - Responsive Typography */}
            <div>
              <div className="flex items-baseline gap-2 mb-1 max-md:mb-1">
                <h3 className="text-[24px] md:text-[22px] max-md:text-[20px] font-semibold leading-tight max-md:leading-[1.2] drop-shadow-lg">
                  {location}
                </h3>
                <span className="text-[14px] md:text-[13px] max-md:text-[12px] opacity-70 drop-shadow-md">
                  {countryCode}
                </span>
              </div>
              <p className="text-[14px] md:text-[13px] max-md:text-[12px] opacity-85 drop-shadow-md">
                {stats}
              </p>
            </div>

            {/* Bottom CTA - Glass Button - Fixed position at bottom-left with consistent spacing */}
            <div className="mt-auto pointer-events-none">
              <GlassButton
                size="default"
                contentClassName="flex items-center gap-2 text-white font-semibold text-[14px] md:text-[13px] max-md:text-[13px]"
                className="w-fit transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                <span>Explore Now</span>
                <Plane className="w-4 h-4 md:w-3.5 md:h-3.5 max-md:w-3.5 max-md:h-3.5 transition-transform group-hover:translate-x-1" />
              </GlassButton>
            </div>
          </div>

          {/* Flag Container - Fixed position, always visible at 30% opacity */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] md:h-[32%] max-md:h-[30%] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-30 md:opacity-28 max-md:opacity-25">
              <img
                src={flagUrl}
                alt={`${location} flag`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
