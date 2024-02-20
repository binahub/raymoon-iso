'use client';
import { forwardRef } from 'react';
import { Textarea as RizzTextArea, type TextareaProps } from 'rizzui';

export { type TextareaProps } from 'rizzui';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ color, ...props }, ref) => {
    return <RizzTextArea color={color || 'info'} {...props} ref={ref} />;
  }
);

Textarea.displayName = 'Textarea';
