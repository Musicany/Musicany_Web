"use client";

import React, { useState } from "react";
import { customAxios } from "@/utils/axios/customAxios";
import { useRouter } from "next/navigation";
import * as S from "./style";

const SignIn = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {};

  return (
    <S.Layout>
      <S.FormLayout>
        <S.Form>
          <S.SignUpTitle>로그인</S.SignUpTitle>
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
          </S.Inputs>
          <S.SubmitButton onClick={handleSubmit}>로그인</S.SubmitButton>
        </S.Form>
      </S.FormLayout>
    </S.Layout>
  );
};

export default SignIn;
