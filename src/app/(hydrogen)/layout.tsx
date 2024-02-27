'use client';
import BerylLiumLayout from '@/layouts/beryllium/beryllium-layout';
import { useIsMounted } from '@/hooks/use-is-mounted';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <BerylLiumLayout>{children}</BerylLiumLayout>;
}
