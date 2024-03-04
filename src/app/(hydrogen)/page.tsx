import { metaObject } from '@/common/config/site.config';
import ExecutiveDashboardPage from './executive/page';

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  return <ExecutiveDashboardPage />;
}
