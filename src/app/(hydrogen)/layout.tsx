'use client';
import { useLayout } from '@/hooks/use-layout';
import BerylLiumLayout from '@/layouts/beryllium/beryllium-layout';

import { useIsMounted } from '@/hooks/use-is-mounted';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { layout } = useLayout();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <BerylLiumLayout>{children}</BerylLiumLayout>;
}
