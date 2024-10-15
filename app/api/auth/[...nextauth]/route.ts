import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/utils/db/database";
import bcrypt from "bcrypt";
import { WithId, Document } from "mongodb";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const db = (await connectDB).db("musicany");
        const user = await db
          .collection<WithId<Document>>("user_cred")
          .findOne({ email: credentials?.email });

        if (!user) {
          return null;
        }

        const pwcheck = await bcrypt.compare(
          credentials!.password,
          user.password,
        );
        if (!pwcheck) {
          return null;
        }

        // NextAuth의 User 타입과 호환되도록 변환
        const resultUser: User = {
          // eslint-disable-next-line no-underscore-dangle
          id: user._id.toString(), // MongoDB의 _id를 문자열로 변환
          name: user.name || "Unknown",
          email: user.email,
        };

        return resultUser;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30일
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      const gotToken = token;
      if (user) {
        gotToken.user = {
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },

    session: async ({ session, token }) => {
      const gotSession = { ...session };

      if (
        token.user &&
        typeof token.user === "object" &&
        "name" in token.user &&
        "email" in token.user
      ) {
        gotSession.user = {
          name: token.user.name as string | null,
          email: token.user.email as string | null,
          image: null,
        };
      }

      return gotSession;
    },
    redirect: async ({ url, baseUrl }) => {
      return baseUrl; // 기본 경로인 '/'로 리다이렉트
    },
  },

  secret: process.env.JWT_SECRET,
  debug: true,
});

export { handler as GET, handler as POST };
