
import * as React from 'react';
import clsx from 'clsx';
import { motion, HTMLMotionProps, MotionValue } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'success';
  isLoading?: boolean;
  children?: React.ReactNode | MotionValue<number> | MotionValue<string>;
}

export function Button({ className, variant = 'primary', isLoading = false, children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none h-10 px-5';
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 shadow-sm',
    secondary: 'bg-[#00D1FF] text-zinc-900 hover:bg-[#00D1FF]/90 focus:ring-[#00D1FF] shadow-sm',
    success: 'bg-[color:var(--brand-success,#10B981)] text-white hover:bg-[#0ea371] focus:ring-[color:var(--brand-success,#10B981)] shadow-sm',
    ghost: 'bg-white/80 backdrop-blur-sm text-zinc-900 hover:bg-white border border-zinc-200/80',
    accent: 'bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 shadow-sm',
  };
  return (
    <motion.button 
      className={clsx(base, variants[variant], className)} 
      disabled={isLoading || props.disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {isLoading && <span className="mr-2 inline-block h-4 w-4 animate-spin border-2 border-white/60 border-t-white rounded-full" aria-hidden />}
      {typeof children === 'object' && (children as MotionValue<any>)?.get !== undefined
        ? (children as MotionValue<any>).get().toString()
        : children}
    </motion.button>
  );
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  headerRight?: React.ReactNode;
}

export function Card({ className, title, subtitle, headerRight, children, ...props }: CardProps) {
  return (
    <div className={clsx('rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] p-6 transition hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]', className)} {...props}>
      {(title || subtitle || headerRight) && (
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            {title && <h3 className="text-zinc-900 text-lg font-semibold tracking-tight">{title}</h3>}
            {subtitle && <p className="text-zinc-500 text-sm">{subtitle}</p>}
          </div>
          {headerRight && (
            <div className="shrink-0">{headerRight}</div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'w-full rounded-md border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-500 h-12 px-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]',
        className
      )}
      {...props}
    />
  );
}
