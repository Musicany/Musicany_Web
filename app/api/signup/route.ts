import { connectDB } from "@/utils/db/database";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server"; // NextResponse 사용

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // 입력 데이터 유효성 검사
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "모든 필드를 입력하세요" },
        { status: 400 },
      );
    }

    // 비밀번호 해시
    const hash = await bcrypt.hash(password, 10);

    // DB 연결
    const db = (await connectDB).db("musicany");
    await db.collection("user_cred").insertOne({
      name,
      email,
      password: hash, // 해시된 비밀번호 저장
    });

    return NextResponse.json({ message: "성공" }, { status: 201 });
  } catch (error) {
    console.error("회원가입 중 오류 발생:", error);
    return NextResponse.json({ message: "서버 에러" }, { status: 500 });
  }
}
