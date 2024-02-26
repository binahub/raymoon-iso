'use client';

import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { Form, Text, Input, Password, Button, Switch } from 'shafa-bo';
import { useMedia } from '@/hooks/use-media';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';

const initialValues: LoginSchema = {
  username: '',
  password: '',
  rememberMe: true,
};

export default function SignInForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);
  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log('Sign in data ->', data);
  };

  return (
    <div className='xl:pe-12 2xl:pe-20'>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className='space-y-5 lg:space-y-6'>
            <Input
              type='email'
              size={isMedium ? 'lg' : 'xl'}
              label='Email'
              placeholder='Enter your email'
              color='info'
              className='[&>label>span]:font-medium'
              {...register('username')}
              error={errors.username?.message}
            />
            <Password
              label='Password'
              placeholder='Enter your password'
              size={isMedium ? 'lg' : 'xl'}
              color='info'
              className='[&>label>span]:font-medium'
              {...register('password')}
              error={errors.password?.message}
            />
            <div className='flex items-center justify-between'>
              <Switch
                variant='active'
                label='Remember Me'
                color='info'
                className='[&>label>span]:font-medium [&>label]:my-1'
                {...register('rememberMe')}
              />
              <Link
                href={routes.auth.forgotPassword5}
                className='h-auto p-0 text-sm font-medium text-gray-900 underline transition-colors hover:text-primary hover:no-underline'
              >
                Forget Password?
              </Link>
            </div>
            <Button className='w-full' type='submit' size={isMedium ? 'lg' : 'xl'} color='info'>
              Sign In
            </Button>
          </div>
        )}
      </Form>
      <Text className='mt-6 text-center text-[15px] leading-loose text-gray-500 lg:mt-9 xl:text-base'>
        Don’t have an account?{' '}
        <Link
          href={routes.auth.signUp5}
          className='font-bold text-gray-700 transition-colors hover:text-primary'
        >
          Sign Up
        </Link>
      </Text>
    </div>
  );
}
