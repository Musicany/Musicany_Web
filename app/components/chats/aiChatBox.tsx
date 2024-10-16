"use client";

import React from "react";
import styled from "styled-components";
import { flex, font, theme } from "@/styles";

const Layout = styled.div`
  ${flex.COLUMN_FLEX};
`;
const NameLayout = styled.div`
  padding-left: 14px;
`;
const Name = styled.p`
  ${font.SmallText};
  color: ${theme.grey700};
`;
const MessageLayout = styled.div`
  ${flex.FLEX};
`;
const MessageBox = styled.div`
  padding: 8px 14px;
  border-radius: 20px;
  background: ${theme.grey300};
  max-width: 100%; /* MainLayout의 너비를 넘지 않도록 설정 */
  word-wrap: break-word;
  word-break: break-word; /* 긴 단어를 자동으로 줄바꿈 */
`;

const Text = styled.pre`
  ${font.Text};
  color: ${theme.grey1000};
  white-space: pre-wrap; /* 줄바꿈 처리 */
  word-wrap: break-word; /* 단어가 넘칠 경우 줄바꿈 */
  word-break: break-word;
  max-width: 100%; /* 텍스트가 MainLayout의 너비를 넘지 않도록 설정 */
`;

interface AiChatBoxProps {
  children?: React.ReactNode;
  name?: boolean;
}

const AiChatBox = ({ children, name }: AiChatBoxProps) => {
  return (
    <Layout>
      {name && (
        <NameLayout>
          <Name>Musicany AI</Name>
        </NameLayout>
      )}
      <MessageLayout>
        <MessageBox>
          <Text>{children}</Text>
        </MessageBox>
      </MessageLayout>
    </Layout>
  );
};

export default AiChatBox;
