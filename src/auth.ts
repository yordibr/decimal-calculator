import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user: User = {
          id: '1',
          name: 'Yordanos Birhane',
          email: 'yordanosb@gmail.com',
        };

        if (!user) {
          throw new Error('User not found.');
        }

        return user;
      },
    }),
  ],
});
