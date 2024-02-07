'use client';

import cn from '@/utils/class-names';
import { forwardRef } from 'react';
import { Button as RizzButton, type ButtonProps } from 'rizzui';

export { type ButtonProps } from 'rizzui';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <RizzButton
      className={cn('dark:bg-yellow-500 bg-primary text-white', className)}
      {...props}
      ref={ref}
    ></RizzButton>
  );
});

Button.displayName = 'Button';
