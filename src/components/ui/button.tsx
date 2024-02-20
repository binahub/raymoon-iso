'use client';

import cn from '@/utils/class-names';
import { forwardRef } from 'react';
import { Button as RizzButton, type ButtonProps } from 'rizzui';

export { type ButtonProps } from 'rizzui';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <RizzButton
        className={cn(
          `dark:bg-yellow-500 bg-primary text-white ${
            variant === 'outline' &&
            '!bg-inherit text-primary dark:text-yellow-500 border border-primary dark:border-yellow-500'
          } `,
          className
        )}
        {...props}
        ref={ref}
      ></RizzButton>
    );
  }
);

Button.displayName = 'Button';
