"use client";

import React from "react";

import * as S from "./style";

const IfCode = () => {
  return (
    <S.Layout>
      <S.ChooseModal>
        <S.ContentLayout>
          <S.Title>이미 생각한 코드진행이 있으신가요?</S.Title>
          <S.SelectLayout>
            <S.Select>예</S.Select>
            <S.Select>아니요</S.Select>
          </S.SelectLayout>
        </S.ContentLayout>
        <S.FooterLine />
      </S.ChooseModal>
    </S.Layout>
  );
};

export default IfCode;
