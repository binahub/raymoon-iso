import type { NextAuthOptions, Session } from 'next-auth';
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
      return {
        ...session,
        authResponse: token,
        apiToken: token.accessToken,
      };
    },
    async jwt({ token, user }) {
      if (user) {
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
          'http://mobile-panel-service-payment-dev.apps.ocpdev.spsplan.local/api/v1/Authentication/Token',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          }
        );
        const user = (await res.json()) as any;

        if (user && user.data.accessToken) {
          const copiedUser = {
            id: user.data.id,
            accessToken: user.data.accessToken,
          };

          // console.log('login', user);

          return copiedUser as any;
        } else if (user && user.error) {
          return Promise.reject(new Error(user.error?.message));
        }
        return null;
      },
    }),
  ],
};
