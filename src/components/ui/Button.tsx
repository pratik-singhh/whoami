import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center gap-3 px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300";
    
    const variants = {
      primary: "bg-nier-dark text-nier-bg hover:bg-[#1a1814]",
      secondary: "bg-nier-surface text-nier-dark hover:bg-[#d0cec3] border border-nier-border",
      ghost: "text-nier-text hover:text-nier-dark bg-transparent hover:bg-black/5"
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center gap-3 px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300";
    
    const variants = {
      primary: "bg-nier-dark text-nier-bg hover:bg-[#1a1814]",
      secondary: "bg-nier-surface text-nier-dark hover:bg-[#d0cec3] border border-nier-border",
      ghost: "text-nier-text hover:text-nier-dark bg-transparent hover:bg-black/5"
    };

    return (
      <a
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      />
    );
  }
);

LinkButton.displayName = 'LinkButton';
