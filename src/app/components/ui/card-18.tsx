import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/app/components/ui/button';

// CVA for card variants
const cardVariants = cva(
  'group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md h-full',
  {
    variants: {
      variant: {
        default: 'p-6',
        featured: 'flex-col md:flex-row',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Interface for component props
export interface BlogPostCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  tag: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  readMoreText?: string;
}

const BlogPostCard = React.forwardRef<HTMLDivElement, BlogPostCardProps>(
  ({ className, variant, tag, date, title, description, imageUrl, href, readMoreText = 'Read the full article', ...props }, ref) => {
    
    // Animation variants for motion
    const cardHover = {
      hover: {
        y: -5,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
    };
    
    const content = (
      <>
        {variant === 'featured' && imageUrl && (
          <div className="blog-card-featured-image">
            <img
              src={imageUrl}
              alt={title}
              className="blog-card-image"
            />
          </div>
        )}

        <div className="blog-card-content">
          <div>
            <div className="blog-card-badges">
              <span className="blog-card-badge-primary">{tag}</span>
              <span className="blog-card-badge-secondary">{date}</span>
            </div>

            <h3 className="blog-card-title">
              {title}
            </h3>
            
            <p className="blog-card-description">{description}</p>
          </div>

          {variant === 'featured' && (
            <div className="blog-card-cta-wrapper">
                <Button variant="default" className="blog-card-cta-button group/button">
                    {readMoreText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Button>
            </div>
          )}
        </div>
      </>
    );

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, className }), "blog-card-container")}
        variants={cardHover}
        whileHover="hover"
        {...props}
      >
        <div className="blog-card-inner">{content}</div>

        {/* Comprehensive Responsive Styles */}
        <style>{`
          /* ============================================
             BLOG CARD CONTAINER
             ============================================ */
          .blog-card-container {
            width: 100%;
            max-width: 100%;
          }

          /* ============================================
             BLOG CARD INNER
             ============================================ */
          .blog-card-inner {
            position: relative;
            z-index: 0;
            display: flex;
            height: 100%;
            width: 100%;
          }

          /* Mobile: stacked column */
          @media (max-width: 767px) {
            .blog-card-inner {
              flex-direction: column;
            }
          }

          /* Tablet & Desktop: row for featured */
          @media (min-width: 768px) {
            .blog-card-container[class*="featured"] .blog-card-inner {
              flex-direction: row;
            }
          }

          /* ============================================
             FEATURED SERVICE CARD (MAIN CARD WITH IMAGE + CONTENT)
             Desktop (≥1024px): 2-column layout - Left → image, Right → content
             Maintain balanced width ratio (50/50 or 55/45)
             Tablet (768-1023px): Reduce image width slightly
             Mobile (≤767px): Fully stacked layout - Image, Badge, Title, Description, CTA button
             Ensure smooth transition between layouts
             ============================================ */
          
          /* ============================================
             IMAGE BEHAVIOR
             Maintain consistent aspect ratio
             Prevent image cropping of important area
             Desktop height: 320-420px
             Mobile height: auto
             Image should scale proportionally
             ============================================ */
          .blog-card-featured-image {
            position: relative;
            width: 100%;
            overflow: hidden;
            flex-shrink: 0;
          }

          /* Mobile: full width, auto height */
          @media (max-width: 767px) {
            .blog-card-featured-image {
              height: 240px;
            }
          }

          /* Tablet: 45% width, 280px height */
          @media (min-width: 768px) and (max-width: 1023px) {
            .blog-card-featured-image {
              width: 45%;
              height: 280px;
            }
          }

          /* Desktop: 50% width, 360px height (within 320-420px) */
          @media (min-width: 1024px) {
            .blog-card-featured-image {
              width: 50%;
              height: 360px;
            }
          }

          .blog-card-image {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.5s ease-in-out;
          }

          .group:hover .blog-card-image {
            transform: scale(1.05);
          }

          /* ============================================
             CARD INTERNAL SPACING
             Desktop padding: 32px
             Tablet padding: 24-28px
             Mobile padding: 20px
             Maintain consistent spacing between: Badge, Title, Description, CTA
             ============================================ */
          .blog-card-content {
            display: flex;
            flex: 1;
            flex-direction: column;
            min-width: 0;
          }

          /* Mobile: 20px padding */
          @media (max-width: 767px) {
            .blog-card-content {
              padding: 20px;
            }
          }

          /* Tablet: 26px padding */
          @media (min-width: 768px) and (max-width: 1023px) {
            .blog-card-content {
              padding: 26px;
            }
          }

          /* Desktop: 32px padding */
          @media (min-width: 1024px) {
            .blog-card-content {
              padding: 32px;
            }
          }

          /* ============================================
             BADGE / LABEL (FEATURED + PREMIUM SERVICE)
             Prevent wrapping or overlapping
             Keep badges aligned horizontally
             Mobile: allow stacking if needed
             Reduce badge padding on small screens
             ============================================ */
          .blog-card-badges {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #71717A;
            flex-wrap: wrap;
          }

          /* Mobile: 12px bottom margin, 12px gap */
          @media (max-width: 767px) {
            .blog-card-badges {
              margin-bottom: 12px;
              gap: 8px;
            }
          }

          /* Tablet: 14px bottom margin, 14px gap */
          @media (min-width: 768px) and (max-width: 1023px) {
            .blog-card-badges {
              margin-bottom: 14px;
              gap: 12px;
            }
          }

          /* Desktop: 16px bottom margin, 16px gap */
          @media (min-width: 1024px) {
            .blog-card-badges {
              margin-bottom: 16px;
              gap: 16px;
            }
          }

          .blog-card-badge-primary {
            border-radius: 9999px;
            background-color: rgba(78, 166, 47, 0.1);
            color: #4EA62F;
          }

          /* Mobile: reduced padding */
          @media (max-width: 767px) {
            .blog-card-badge-primary {
              padding: 4px 10px;
            }
          }

          /* Tablet & Desktop: standard padding */
          @media (min-width: 768px) {
            .blog-card-badge-primary {
              padding: 4px 12px;
            }
          }

          .blog-card-badge-secondary {
            color: #71717A;
          }

          /* ============================================
             TEXT & CONTENT - TITLE INSIDE CARD
             Title inside card:
             Desktop: 22-24px
             Mobile: 18px
             ============================================ */
          .blog-card-title {
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            line-height: 1.1;
            color: #18181B;
            margin: 0;
            letter-spacing: -0.03em;
            text-transform: uppercase;
          }

          /* Mobile: 18px */
          @media (max-width: 767px) {
            .blog-card-title {
              font-size: 18px;
              margin-bottom: 12px;
            }
          }

          /* Tablet: 20px */
          @media (min-width: 768px) and (max-width: 1023px) {
            .blog-card-title {
              font-size: 20px;
              margin-bottom: 12px;
            }
          }

          /* Desktop: 23px (within 22-24px) */
          @media (min-width: 1024px) {
            .blog-card-title {
              font-size: 23px;
              margin-bottom: 12px;
            }
          }

          /* ============================================
             TEXT & CONTENT - DESCRIPTION TEXT
             Description text:
             Desktop: 16px
             Mobile: 14px
             Line height: 1.5-1.6
             Prevent long text overflow or excessive wrapping
             ============================================ */
          .blog-card-description {
            font-family: 'Outfit', sans-serif;
            color: #71717A;
            margin: 0;
            line-height: 1.6;
            font-weight: 500;
          }

          /* Mobile: 14px */
          @media (max-width: 767px) {
            .blog-card-description {
              font-size: 14px;
            }
          }

          /* Tablet: 15px */
          @media (min-width: 768px) and (max-width: 1023px) {
            .blog-card-description {
              font-size: 15px;
            }
          }

          /* Desktop: 16px */
          @media (min-width: 1024px) {
            .blog-card-description {
              font-size: 16px;
            }
          }

          /* ============================================
             CTA BUTTON
             Keep button aligned with content block
             Desktop: right aligned or inline
             Mobile: full width or centered
             Maintain consistent button size across breakpoints
             ============================================ */
          .blog-card-cta-wrapper {
            display: flex;
            margin-top: auto;
          }

          /* Mobile: centered, top margin */
          @media (max-width: 767px) {
            .blog-card-cta-wrapper {
              justify-content: center;
              padding-top: 20px;
            }
          }

          /* Tablet: right aligned */
          @media (min-width: 768px) and (max-width: 1023px) {
            .blog-card-cta-wrapper {
              justify-content: flex-end;
              padding-top: 20px;
            }
          }

          /* Desktop: right aligned */
          @media (min-width: 1024px) {
            .blog-card-cta-wrapper {
              justify-content: flex-end;
              padding-top: 24px;
            }
          }

          .blog-card-cta-button {
            transition: all 0.2s ease;
          }

          /* Mobile: full width */
          @media (max-width: 767px) {
            .blog-card-cta-button {
              width: 100%;
              max-width: 280px;
            }
          }
        `}</style>
      </motion.div>
    );
  }
);

BlogPostCard.displayName = 'BlogPostCard';

export { BlogPostCard };