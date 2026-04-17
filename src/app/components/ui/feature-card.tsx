import React from 'react';
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn

/**
 * Props for the FeatureCard component.
 * @param {React.ReactNode} icon - The icon element to display at the top of the card.
 * @param {string} title - The title or heading of the feature.
 * @param {string} description - The descriptive text for the feature.
 * @param {string} [className] - Optional additional class names for custom styling.
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * A responsive and theme-adaptive card component to highlight features.
 * Built with shadcn/ui principles.
 */
export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground p-6 rounded-xl border flex flex-col items-center text-center min-h-[220px]",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-lg hover:-translate-y-2",
        className
      )}
    >
      {/* Icon container */}
      <div className="bg-secondary p-3 rounded-full mb-4">
        {icon}
      </div>

      {/* Title */}
      {title && (
        <h3 className="text-lg font-semibold mb-3 tracking-tight">
          {title}
        </h3>
      )}

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed flex-1 flex items-center text-[14px]">
        {description}
      </p>
    </div>
  );
};