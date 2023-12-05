import NextAuth, {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000/'
// url = baseUrl + '/api/auth/callback/google'
// console.log(url)

export const authOptions = {
  //authentication providers
  providers: [
    GithubProvider({
      clientId: 'a646a6be2e65c8c03bdd',
      clientSecret: '8c118905f0ba2c88e830f4d65e0d800d689a1ba7',
    }),
    GoogleProvider({
      clientId: '74060280128-srahfv87jcjccmc2evv9p2onapjk7248.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    CredentialsProvider({
      type: 'credentials',
      Credentials: {},
      authorize(credentials, req) {
        let { email, password } = credentials; // Use let instead of const

        // Convert email and password to lowercase
        email = email.toLowerCase();
        password = password.toLowerCase();

        if (email === 'erikadikah2030@gmail.com' && password === '123456') {
          const user = { id: 1, name: 'Admin' };
          return Promise.resolve(user);
        }
        // Handle other cases or return null if credentials are not valid
        return Promise.resolve(null);
      }
    }),
    //more providers
  ],
   callback: {
    redirect: async (url, baseUrl) => {
      return Promise.resolve(url);
    },
    session: async (session, user) => {
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
  console.log('JWT Token:', token);
  return Promise.resolve(token);
},

    onError: async (error, req, res) => {
      console.error('NextAuth Error:', error.message);
      return Promise.resolve('/auth/error'); // Redirect to an error page
    },
  },
  async session(session, user) {
    session.user.id = user.id
    return session
  },

  pages: {
    signIn: '/pages/signin',  // Displays signin buttons
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  },
}
export default NextAuth(authOptions)