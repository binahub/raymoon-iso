import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface ResError {
  code: string;
  message: string;
  target: string;
  details: Array<unknown>;
}

export interface FetchError extends Omit<FetchBaseQueryError, 'error'> {}