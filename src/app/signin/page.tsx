import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import { metaObject } from '@/config/site.config';
import signInBanner from "@public/assets/signin/login-banner.jpg"

export const metadata = {
  ...metaObject('Sign In'),
};
export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
         {''}به پنل مدیریت {''}
          {''}<span className="relative inline-block"> {''}
          {''}  ایوا{''}
            <UnderlineShape className="absolute -bottom-4 start-0 h-2.5 w-16 text-blue md:w-16 xl:-bottom-1.5 xl:w-16" />
          </span>{' '}
          خوش آمدید{' '}👋
        </>
      }
      // description="با لاگین در سامانه شما دسترسی خواهید داشت برای مشاهده و مدیریت گزارشات  "
      // bannerTitle="آسانترین روش برای مدیریت "
      // bannerDescription="تست بنر توضیحات"
      isSocialLoginActive={false}
      pageImage={
        // <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={signInBanner}
            alt="Sign Up Thumbnail"
            // fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover rounded-3xl"
          />
        // </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
