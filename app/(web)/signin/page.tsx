"use client";

import React, { useState } from "react";
import { customAxios } from "@/utils/axios/customAxios";
import * as S from "./style";
import { AxiosError } from "axios";

const SignIn = () => {
  const [signInData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await customAxios.post("/auth/signin", signInData);
      const { accessToken, refreshToken, username } = response.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("username", username);

      alert("정상적으로 로그인되었습니다!");
      window.location.href = "/main";
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data.message); // 안전하게 응답 데이터 접근
      } else {
        alert("An unexpected error occurred."); // 일반적인 오류 처리
      }
    }
  };

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
              value={signInData.email}
              onChange={handleChange}
            />
            <S.Input
              name="password"
              type="password"
              placeholder="password"
              value={signInData.password}
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
