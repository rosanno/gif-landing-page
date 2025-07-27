import React, { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'ghost';
  padding?: 'none' | 'small' | 'medium' | 'large';
  radius?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = '',
  variant = 'default',
  padding = 'medium',
  radius = 'medium',
  shadow = 'small',
  ...props
}, ref) => {
  const baseStyles = 'bg-white';

  const variantStyles = {
    default: 'bg-white',
    bordered: 'border border-gray-200',
    ghost: 'bg-transparent',
  };

  const paddingStyles = {
    none: 'p-0',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6',
  };

  const radiusStyles = {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
  };

  const shadowStyles = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };

  return (
    <div
      ref={ref}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${radiusStyles[radius]}
        ${shadowStyles[shadow]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
