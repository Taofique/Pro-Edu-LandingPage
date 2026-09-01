import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "outline" | "white";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center rounded-[5px] px-[33px] py-[13px] font-sans font-semibold text-[20px] leading-none whitespace-nowrap transition-colors cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white border border-brand hover:bg-brand/90",
  outline: "bg-transparent text-brand border border-brand hover:bg-brand/10",
  white: "bg-white text-brand border border-white hover:bg-white/90",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = twMerge(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
