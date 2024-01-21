import IvaTable from './table';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Collapsible Table'),
};

export default function CollapsibleTablePage() {
  return (
    <IvaTable
      variant="classic"
    />
  );
}
