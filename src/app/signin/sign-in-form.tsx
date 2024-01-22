'use client';

import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowLeftBold, PiArrowRightBold } from 'react-icons/pi';
import { Checkbox } from '@/components/ui/checkbox';
import { Password } from '@/components/ui/password';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';
import { useRouter } from 'next/navigation';
import Notification from '@/utils/notification';

const initialValues: LoginSchema = {
  username: '',
  password: '',
  rememberMe: true,
};

export default function SignInForm() {
  //TODO: why we need to reset it here
  const [reset, setReset] = useState({});
  const { data: session, status: authStatus } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    authStatus == 'authenticated' ? router.push('/') : null;
  }, [authStatus, router]);

  const onSubmit: SubmitHandler<LoginSchema> = async (data, e) => {
    e?.preventDefault();
    try {
      setLoading(true);
      await signIn('credentials', {
        ...data,
        redirect: false,
      }).then((result: any) => {
        if (result?.ok) {
          router.push('/dashboard');
        } else {
          Notification.error(result?.error);
          setLoading(false);
        }
      });
    } catch (error) {
      setLoading(false);
    }

    // setReset({ email: "", password: "", isRememberMe: false });
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className='space-y-5'>
            <Input
              type='text'
              size='lg'
              label='نام کاربری'
              placeholder='نام کاربری خود را وارد کنید'
              color='info'
              className='[&>label>span]:font-medium'
              inputClassName='text-sm'
              {...register('username')}
              error={errors.username?.message}
            />
            <Password
              label='رمز عبور'
              placeholder='رمز عبور خود را وارد کنید'
              size='lg'
              className='[&>label>span]:font-medium'
              inputClassName='text-sm'
              color='info'
              {...register('password')}
              error={errors.password?.message}
            />
            <Button className='w-full bg-blue-950' type='submit' size='lg' isLoading={loading}>
              <span className='font-[vazir]'>وارد شوید</span>{' '}
              <PiArrowLeftBold className='ms-2 mt-0.5 h-5 w-5' />
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
