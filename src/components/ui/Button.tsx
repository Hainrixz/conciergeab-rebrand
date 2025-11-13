import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-transform duration-300 ease-[var(--ease-luxury)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-[0_12px_30px_rgba(1,1,1,0.08)]";

const variantStyles = {
  primary:
    "bg-bronze text-white hover:translate-y-[-2px] hover:bg-[#bfa582] focus-visible:outline-bronze/60",
  secondary:
    "bg-transparent text-earth border border-earth/30 hover:border-earth hover:bg-white/30",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:outline-white",
};

export type ButtonVariant = keyof typeof variantStyles;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  icon,
  iconPosition = "end",
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  const content = (
    <>
      {icon && iconPosition === "start" && (
        <span aria-hidden="true" className="text-base">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "end" && (
        <span aria-hidden="true" className="text-base">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
