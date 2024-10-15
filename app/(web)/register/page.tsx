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
      await axios.post("/api/signup", formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      alert("정상적으로 가입되었습니다!");
    } catch {
      alert("가입에 실패하였습니다.");
    }
  };

  return (
    <S.Layout>
      <S.FormLayout>
        <S.Form onSubmit={handleSubmit}>
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
