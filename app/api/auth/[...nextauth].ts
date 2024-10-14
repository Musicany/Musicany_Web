import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_PW}`,
    }),
  ],
  secret: process.env.JWT_PW,
};
export default NextAuth(authOptions);
