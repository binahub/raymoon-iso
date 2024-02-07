'use client';
import { forwardRef } from 'react';
import { Input as RizzInput, type InputProps } from 'rizzui';

export { type InputProps } from 'rizzui';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ color, ...props }, ref) => {
  return <RizzInput color={color || 'info'} ref={ref} {...props} />;
});

Input.displayName = 'Input';
