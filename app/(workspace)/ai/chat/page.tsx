"use client";

import React, { useEffect, useRef, useState } from "react";
import AiChatBox from "@/components/chats/aiChatBox";
import UserChatBox from "@/components/chats/userChatBox";
import SendIcon from "@/assets/send";
import * as S from "./style";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]); // 메시지를 저장하는 상태
  const [inputText, setInputText] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [...prevMessages, inputText]);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <S.Layout>
      <S.WhiteLayout>
        <S.MainLayout>
          <S.StartComment>Musicany AI가 실행되었습니다.</S.StartComment>
          <S.ChatLayout>
            <AiChatBox name>안녕하세요! 곡 추천을 시작해드릴게요.</AiChatBox>
            <AiChatBox>곡 분위기는 어떤 느낌을 원하세요?</AiChatBox>
            <AiChatBox>
              대표적인 예시로는 재즈, 블루스, POP, 발라드 등이 있어요.
            </AiChatBox>

            {messages.map((message) => (
              <UserChatBox>{message}</UserChatBox>
            ))}

            <div ref={chatEndRef} />
          </S.ChatLayout>
        </S.MainLayout>
        <S.InputLayout>
          <S.InputWithIcon>
            <S.Input
              placeholder="메시지 입력.."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)} // 입력된 값을 상태로 저장
              onKeyPress={handleKeyPress} // Enter 키를 누르면 전송
            />
            <S.SendIconLayout onClick={handleSendMessage}>
              <SendIcon />
            </S.SendIconLayout>
          </S.InputWithIcon>
        </S.InputLayout>
      </S.WhiteLayout>
    </S.Layout>
  );
};

export default Chat;
