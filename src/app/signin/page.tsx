import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign In'),
};
export default function SignIn() {
  return (
    <AuthWrapperOne
    title='به پنل مدیریت ایوا خوش آمدید👋'
      // title={
      //   <>
      //     به پنل مدیریتی خوش آمدید{' '}
      //     <span className="relative inline-block">
      //       برای ادامه 
      //       <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
      //     </span>{' '}
      //    لاگین کنید
      //   </>
      // }
      // description="با لاگین در سامانه شما دسترسی خواهید داشت برای مشاهده و مدیریت گزارشات  "
      // bannerTitle="آسانترین روش برای مدیریت "
      // bannerDescription="تست بنر توضیحات"
      isSocialLoginActive={false}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[600px] 2xl:w-[600px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
