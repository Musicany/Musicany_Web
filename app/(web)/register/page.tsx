"use client";

import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", formData);
      console.log("회원가입 성공", response.data);
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

  return (
    <S.Layout>
      <S.FormLayout>
        <S.Form onSubmit={handleSubmit}>
          {" "}
          {/* onSubmit 이벤트 핸들러 추가 */}
          <S.SignUpTitle>회원가입</S.SignUpTitle>
          <S.Inputs>
            <S.Input
              name="email"
              type="text"
              placeholder="Email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <S.Input
              name="password"
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            <S.Input
              name="name"
              type="text"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleChange}
            />
          </S.Inputs>
          <S.SubmitButton type="submit">
            개인정보 수집에 동의하고 회원가입
          </S.SubmitButton>
        </S.Form>
      </S.FormLayout>
    </S.Layout>
  );
};

export default Register;
