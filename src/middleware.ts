import { pagesOptions } from '@/app/api/auth/[...nextauth]/pages-options';
import withAuth from 'next-auth/middleware';

export default withAuth({
  pages: {
    ...pagesOptions,
  },
});

export const config = {
  // restricted routes
  matcher: [
    '/',
    '/iva',
    '/neshan/list',
    '/food/create',
    '/food/list',
    '/food/inquiry-list'
  ],
};
