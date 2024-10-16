"use client";

import React, { useEffect, useRef, useState } from "react";
import AiChatBox from "@/components/chats/aiChatBox";
import UserChatBox from "@/components/chats/userChatBox";
import SendIcon from "@/assets/send";
import * as S from "./style";

interface Message {
  text: string;
  type: "ai" | "user";
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, type: "user" },
      ]);
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
            {messages.map((message, index) => {
              const isDifferentType =
                index === 0 || messages[index - 1].type !== message.type;

              return (
                <div
                  key={index}
                  style={{ marginTop: isDifferentType ? "12px" : "4px" }}
                >
                  {message.type === "ai" ? (
                    <AiChatBox>{message.text}</AiChatBox>
                  ) : (
                    <UserChatBox>{message.text}</UserChatBox>
                  )}
                </div>
              );
            })}
            <div ref={chatEndRef} />
          </S.ChatLayout>
        </S.MainLayout>
        <S.InputLayout>
          <S.InputWithIcon>
            <S.Input
              placeholder="메시지 입력.."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
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
