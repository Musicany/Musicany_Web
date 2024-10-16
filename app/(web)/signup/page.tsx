"use client";

import React, { useState } from "react";
import { customAxios } from "@/utils/axios/customAxios";
import { useRouter } from "next/navigation";
import * as S from "./style";

const SignUp = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await customAxios.post("/auth/signup", signUpData);
      setSignUpData({
        name: "",
        email: "",
        password: "",
      });
      alert("정상적으로 가입되었습니다!");
      await router.push("/singin");
    } catch (err) {
      console.log(err);
      alert("가입에 실패하였습니다.");
    }
  };

  return (
    <S.Layout>
      <S.FormLayout>
        <S.Form>
          <S.SignUpTitle>회원가입</S.SignUpTitle>
          <S.Inputs>
            <S.Input
              name="email"
              type="text"
              placeholder="Email@example.com"
              value={signUpData.email}
              onChange={handleChange}
            />
            <S.Input
              name="password"
              type="password"
              placeholder="password"
              value={signUpData.password}
              onChange={handleChange}
            />
            <S.Input
              name="name"
              type="text"
              placeholder="홍길동"
              value={signUpData.name}
              onChange={handleChange}
            />
          </S.Inputs>
          <S.SubmitButton onClick={handleSubmit}>
            개인정보 수집에 동의하고 회원가입
          </S.SubmitButton>
        </S.Form>
      </S.FormLayout>
    </S.Layout>
  );
};

export default SignUp;
