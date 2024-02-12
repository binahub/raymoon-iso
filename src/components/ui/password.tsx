'use client';
import { forwardRef } from 'react';
import { Password as RizzPassword, PasswordProps } from 'rizzui';

export { type PasswordProps } from 'rizzui';

export const Password = forwardRef<HTMLInputElement, PasswordProps>(({ color, ...props }, ref) => {
  return <RizzPassword color={color || 'info'} ref={ref} {...props} />;
});

Password.displayName = 'Password';
