import { loginUser } from "@/actions/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import { collectionNames, connectDB } from "@/lib/connectDB";
import { User } from "@/models/user.model";

const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await loginUser(credentials);

        if (user) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        const { provider, providerAccountId } = account;
        const { name, email, image } = user;

        await connectDB();

        const isExist = await User.findOne({ email });

        console.log(isExist);

        if (!isExist) {
          const payload = {
            name,
            email,
            image,
            provider,
            providerAccountId,
          };

          await User.insertOne(payload);
        }

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
