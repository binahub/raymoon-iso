import SaberTable from './table';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Collapsible Table'),
};

export default function CollapsibleTablePage() {
  return (
    <SaberTable
      variant="classic"
      className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
    />
  );
}
