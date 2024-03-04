import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { env } from '@/env.mjs';
import { pagesOptions } from './pages-options';
import toast from 'react-hot-toast';

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    ...pagesOptions,
  },
  session: {
    strategy: 'jwt',
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    maxAge: 1800, // 30 mins
  },
  callbacks: {
    async session({ session, token }) {
      console.log('session', session);
      console.log('sessionToken', token);
      return {
        ...session,
        authResponse: token,
        apiToken: token.accessToken,
      };
    },
    async jwt({ token, user }) {
      if (user) {
        console.log('userJWT', user);
        console.log('tokenJWT', token);
        // return user as JWT
        // token.user = user;
        token = { ...token, ...user };
        console.log('tokenJWT2', token);
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      const parsedUrl = new URL(url, baseUrl);
      if (parsedUrl.searchParams.has('callbackUrl')) {
        return `${baseUrl}${parsedUrl.searchParams.get('callbackUrl')}`;
      }
      if (parsedUrl.origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid
        const res = await fetch(
          'http://78.157.51.13/food/api/v1/unit/login/authenticate', // !sadad
          // 'http://mobile-panel-service-payment-dev.apps.ocpdev.spsplan.local/api/v1/Authentication/Token', // sadad
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          }
        )
          .then((response) => {
            return response.json();
          })
          .catch(() => {
            throw new Error('خطا در برقراری ارتباط');
          });

        const user = (await res) as any;

        // console.log('login', user);

          // !sadad

        if (user && user.result == "0") {
          console.log('login',user);
          return user as any;
        }else if(user && user.description){
          console.log('khata',user);
          toast.error(user.description as string);
          alert(user.description as string)
          return null;
        }
        console.log('hichi',user);

        toast.error('خطا در دریافت اطلاعات');

        // sadad

        // if (user && user.error) {
        //   return Promise.reject(new Error(user.error?.message));
        // }

        // if (user && user.data.accessToken) {
        //   const copiedUser = {
        //     id: user.data.id,
        //     accessToken: user.data.accessToken,
        //   };
        //   return copiedUser as any;
        // }

        return null;
      },
    }),
  ],
};
