import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import AuthProvider from '@/app/api/auth/[...nextauth]/auth-provider';
import GlobalDrawer from '@/app/shared/drawer-views/container';
import GlobalModal from '@/app/shared/modal-views/container';
import { ThemeProvider } from '@/app/shared/theme-provider';
import { siteConfig } from '@/common/config/site.config';
import { inter, lexendDeca } from '@/app/fonts';
import cn from '@/common/utils/class-names';
import '../../public/fonts/vazirFont.css';
import '../../public/fonts/iranYekanFont.css';

const NextProgress = dynamic(() => import('@/common/components/next-progress'), {
  ssr: false,
});
// styles
import '@/app/globals.css';
import Providers from '@/common/apis/provider';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang='fa'
      dir='rtl'
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
        className={cn('font-iranYekan')}
      >
        <Providers>
          <AuthProvider session={session}>
            <ThemeProvider>
              <NextProgress />
              {children}
              <Toaster />
              <GlobalDrawer />
              <GlobalModal />
            </ThemeProvider>
          </AuthProvider>
        </Providers>

      </body>
    </html>
  );
}
