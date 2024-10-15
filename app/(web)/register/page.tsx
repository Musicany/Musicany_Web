"use client";

import React from "react";

import * as S from "./style";

const Register = () => {
  return (
    <S.Layout>
      <S.FormLayout>
        <S.Form>
          <S.SignUpTitle>회원가입</S.SignUpTitle>
          <S.Inputs>
            <S.Input placeholder="Email@example.com" />
            <S.Input placeholder="password" />
            <S.Input placeholder="홍길동" />
          </S.Inputs>
          <S.SubmitButton>개인정보 수집에 동의하고 회원가입</S.SubmitButton>
        </S.Form>
      </S.FormLayout>
    </S.Layout>
  );
};

export default Register;
