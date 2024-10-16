"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./style";

interface CompositionModalProps {
  type: "choose" | "write";
  title: string;
  subTitle: string;
}

const CompositionModal = ({ type, title, subTitle }: CompositionModalProps) => {
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputText.length > 0) {
        router.push("/ai/chat");
      } else {
        alert("코드진행을 입력해주세요.");
      }
    }
  };

  return (
    <S.ChooseModal>
      <S.ContentLayout>
        <S.TitleLayout>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.TitleLayout>
        {type === "choose" ? (
          <S.SelectLayout>
            <S.Select onClick={() => router.push("/composition/writeCode")}>
              예
            </S.Select>
            <S.Select onClick={() => router.push("/composition/ai")}>
              아니요
            </S.Select>
          </S.SelectLayout>
        ) : (
          <S.Input
            value={inputText}
            placeholder="코드를 입력하세요"
            onKeyDown={activeEnter}
            onChange={(e) => setInputText(e.target.value)}
          />
        )}
      </S.ContentLayout>
      <S.FooterLine />
    </S.ChooseModal>
  );
};

export default CompositionModal;
