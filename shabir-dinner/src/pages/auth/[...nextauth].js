import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000/'
url = baseUrl + '/api/auth/callback/google'
console.log(url)

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
    // ...add more providers here
  ],
  callback: {
    redirect: async (url, baseUrl) => {
     return Promise.resolve(url)
    },
    session: async (session, user) => {
     return Promise.resolve(session)
    },
    jwt: async (token, user, account, profile, isNewUser) => {
     return Promise.resolve(token)
    }
  },
  async session(session, user) {
    session.user.id = user.id
    return session
  },

  pages: {
    signIn: '/auth/login',  // Displays signin buttons
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  },
  }
export default NextAuth(authOptions)