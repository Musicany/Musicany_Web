"use client";

import React from "react";
import AiChatBox from "@/components/chats/aiChatBox";
import * as S from "./style";

const Chat = () => {
  return (
    <S.Layout>
      <S.WhiteLayout>
        <S.StartComment>작곡 AI가 실행되었습니다.</S.StartComment>
        <S.ChatLayout>
          <AiChatBox name>안녕하세요! 곡 추천을 시작해드릴게요.</AiChatBox>
          <AiChatBox>곡 분위기는 어떤 느낌을 원하세요?</AiChatBox>
          <AiChatBox>대표적인 예시로는 재즈, 블루스, POP, 발라드 등이 있어요.</AiChatBox>
        </S.ChatLayout>
      </S.WhiteLayout>
    </S.Layout>
  );
};

export default Chat;
