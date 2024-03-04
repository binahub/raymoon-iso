'use client';
import { useLayout } from '@/common/hooks/use-layout';
import BerylLiumLayout from '@/common/layouts/beryllium/beryllium-layout';
import { useIsMounted } from '@/common/hooks/use-is-mounted';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { layout } = useLayout();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <BerylLiumLayout>{children}</BerylLiumLayout>;
}
