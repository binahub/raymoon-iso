'use client';

import { SessionProvider } from 'next-auth/react';
import 'shafa-bo/css';


export default function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): React.ReactNode {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
