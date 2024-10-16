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
`;
const Text = styled.pre`
  ${font.Text};
  color: ${theme.grey1000};
`;

interface ChatBoxProps {
  children?: React.ReactNode;
  name?: boolean;
}

const AiChatBox = ({ children, name }: ChatBoxProps) => {
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
