import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'small';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = "font-bold uppercase tracking-widest transition-all cursor-default text-center inline-flex items-center justify-center";
    
    const variants = {
      default: "px-5 py-2 border border-nier-border bg-nier-surface text-nier-dark text-sm hover:bg-nier-dark hover:text-nier-bg",
      small: "px-2 py-1 text-[10px] text-[#7a7870] bg-[#e6e4dc] border border-[#d6d4cc]"
    };

    return (
      <span
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
