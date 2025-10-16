"use client";
import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

function baseClasses(variant: Variant, size: Size) {
  const sizeCls = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  }[size];

  const variantCls = {
    primary: "bg-[var(--lava)] text-white hover:bg-[var(--lava-glow)] hover:shadow-lg hover:shadow-[var(--lava)]/25 hover:-translate-y-0.5 transition-all duration-300",
    secondary: "border border-foreground/20 hover:bg-foreground/5 hover:border-[var(--lava)]/50 hover:text-[var(--lava)] transition-all duration-300",
    ghost: "text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
  }[variant];

  return clsx(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 transform hover:scale-105",
    sizeCls,
    variantCls
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={clsx(baseClasses(variant, size), className)} {...props} />;
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

export function LinkButton({ href, variant = "secondary", size = "md", className, ...props }: LinkButtonProps) {
  // Handle smooth scrolling for anchor links
  if (href.startsWith('#')) {
    return (
      <a 
        href={href} 
        className={clsx(baseClasses(variant, size), className)} 
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        {...props} 
      />
    );
  }
  
  return <Link href={href} className={clsx(baseClasses(variant, size), className)} {...props} />;
}


