import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", // 환경 변수로부터 값이 전달되는지 확인
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // 환경 변수로부터 값이 전달되는지 확인
    }),
  ],
  secret: process.env.JWT_SECRET, // JWT 비밀 키 설정
  debug: true, // 디버깅 활성화
});

export { handler as GET, handler as POST };
