"use client";

import React from "react";

import * as S from "./style";

const Workspace = () => {
  return (
    <S.Layout>
      <S.SideLayout>
        <S.NameLayout>
          <S.UserName>최성훈</S.UserName>
        </S.NameLayout>
        <S.StepLayout>
          <S.Step>Composing</S.Step>
          <S.Step>Instrument</S.Step>
          <S.Step>Sheet Music</S.Step>
        </S.StepLayout>
      </S.SideLayout>
      <S.RightLayout>
        <S.ContentLayout>
          <S.ContentHeader>
            <S.WorkTitle>Works</S.WorkTitle>
          </S.ContentHeader>
          <S.Works>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
          </S.Works>
        </S.ContentLayout>
      </S.RightLayout>
    </S.Layout>
  );
};

export default Workspace;
