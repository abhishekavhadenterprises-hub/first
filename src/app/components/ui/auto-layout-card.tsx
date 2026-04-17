'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface AutoLayoutCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc?: string;
  logoSrc?: string;
}

const AutoLayoutCard = React.forwardRef<HTMLDivElement, AutoLayoutCardProps>(
  ({ className, title, description, imageSrc, logoSrc, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('auto-layout-card', className)}
        {...props}
      >
        <div className="card-image-container">
          <img
            src={imageSrc || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop'}
            alt={title}
            className="card-image"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1740&auto=format&fit=crop';
            }}
          />
          {logoSrc && (
            <div className="card-logo-overlay">
              <img src={logoSrc} alt="logo" className="card-logo" />
            </div>
          )}
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>

        {/* Comprehensive Mobile-First Responsive Styles */}
        <style>{`
          /* ============================================
             CARD CONTAINER
             Mobile (≤480px): Cards fill 100% width, Card padding 16px
             Tablet (768-1199px): Reduce card padding to 20px
             Desktop (≥1200px): Card padding 24px
             Do NOT scale desktop cards
             ============================================ */
          .auto-layout-card {
            position: relative;
            background-color: #FFFFFF;
            border: 1px solid #E5E7EB;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            overflow: hidden;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }

          /* Mobile (≤480px): 16px padding, 12px radius */
          @media (max-width: 480px) {
            .auto-layout-card {
              padding: 16px;
              border-radius: 12px;
            }
          }

          /* Mobile Large (481-767px): 18px padding, 14px radius */
          @media (min-width: 481px) and (max-width: 767px) {
            .auto-layout-card {
              padding: 18px;
              border-radius: 14px;
            }
          }

          /* Tablet (768-1199px): 20px padding, 16px radius */
          @media (min-width: 768px) and (max-width: 1199px) {
            .auto-layout-card {
              padding: 20px;
              border-radius: 16px;
            }
          }

          /* Desktop (≥1200px): 24px padding, 18px radius */
          @media (min-width: 1200px) {
            .auto-layout-card {
              padding: 24px;
              border-radius: 18px;
            }
          }

          /* ============================================
             IMAGE CONTAINER
             Mobile (≤480px): Reduce image height for mobile
             Tablet (768-1199px): Reduce image height
             Desktop (≥1200px): Image ratio 16:9
             ============================================ */
          .card-image-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            background-color: #F3F4F6;
          }

          /* Mobile (≤480px): 180px height */
          @media (max-width: 480px) {
            .card-image-container {
              height: 180px;
              border-radius: 8px;
            }
          }

          /* Mobile Large (481-767px): 200px height */
          @media (min-width: 481px) and (max-width: 767px) {
            .card-image-container {
              height: 200px;
              border-radius: 10px;
            }
          }

          /* Tablet (768-1199px): 220px height, reduce image height */
          @media (min-width: 768px) and (max-width: 1199px) {
            .card-image-container {
              height: 220px;
              border-radius: 12px;
            }
          }

          /* Desktop (≥1200px): 240px height, 16:9 ratio */
          @media (min-width: 1200px) {
            .card-image-container {
              height: 240px;
              border-radius: 14px;
            }
          }

          /* ============================================
             IMAGE
             ============================================ */
          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* ============================================
             LOGO OVERLAY
             ============================================ */
          .card-logo-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.2);
          }

          .card-logo {
            width: 80px;
            height: auto;
          }

          /* ============================================
             CARD CONTENT
             Maintain consistent spacing
             ============================================ */
          .card-content {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          /* Mobile: 16px top padding, 12px gap */
          @media (max-width: 480px) {
            .card-content {
              padding-top: 16px;
              gap: 8px;
            }
          }

          /* Mobile Large: 18px top padding, 10px gap */
          @media (min-width: 481px) and (max-width: 767px) {
            .card-content {
              padding-top: 18px;
              gap: 10px;
            }
          }

          /* Tablet: 20px top padding, 12px gap */
          @media (min-width: 768px) and (max-width: 1199px) {
            .card-content {
              padding-top: 20px;
              gap: 12px;
            }
          }

          /* Desktop: 24px top padding, 12px gap */
          @media (min-width: 1200px) {
            .card-content {
              padding-top: 24px;
              gap: 12px;
            }
          }

          /* ============================================
             CARD TITLE
             Mobile (≤480px): 18px
             Tablet (768-1199px): 20px
             Desktop (≥1200px): 22px
             ============================================ */
          .card-title {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 600;
            color: #0F172A;
            line-height: 1.3;
            margin: 0;
          }

          /* Mobile (≤480px): 18px */
          @media (max-width: 480px) {
            .card-title {
              font-size: 18px;
            }
          }

          /* Mobile Large (481-767px): 19px */
          @media (min-width: 481px) and (max-width: 767px) {
            .card-title {
              font-size: 19px;
            }
          }

          /* Tablet (768-1199px): 20px */
          @media (min-width: 768px) and (max-width: 1199px) {
            .card-title {
              font-size: 20px;
            }
          }

          /* Desktop (≥1200px): 22px */
          @media (min-width: 1200px) {
            .card-title {
              font-size: 22px;
            }
          }

          /* ============================================
             CARD DESCRIPTION
             Mobile (≤480px): Body text 14-15px with increased line height
             Tablet (768-1199px): 15px
             Desktop (≥1200px): 16px
             ============================================ */
          .card-description {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 400;
            color: #6B7280;
            margin: 0;
          }

          /* Mobile (≤480px): 14.5px (within 14-15px), increased line height */
          @media (max-width: 480px) {
            .card-description {
              font-size: 14.5px;
              line-height: 1.7;
            }
          }

          /* Mobile Large (481-767px): 15px */
          @media (min-width: 481px) and (max-width: 767px) {
            .card-description {
              font-size: 15px;
              line-height: 1.65;
            }
          }

          /* Tablet (768-1199px): 15px */
          @media (min-width: 768px) and (max-width: 1199px) {
            .card-description {
              font-size: 15px;
              line-height: 1.6;
            }
          }

          /* Desktop (≥1200px): 16px */
          @media (min-width: 1200px) {
            .card-description {
              font-size: 16px;
              line-height: 1.6;
            }
          }

          /* ============================================
             OVERALL BEHAVIOR
             Natural layout
             No scaling
             Clean responsive design
             ============================================ */
          
          .auto-layout-card {
            transition: box-shadow 0.3s ease, transform 0.2s ease;
          }

          .auto-layout-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
          }
        `}</style>
      </motion.div>
    );
  }
);

AutoLayoutCard.displayName = 'AutoLayoutCard';

export default AutoLayoutCard;