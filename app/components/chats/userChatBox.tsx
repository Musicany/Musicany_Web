import React from "react";
import styled from "styled-components";
import { flex, font, theme } from "@/styles";

const Layout = styled.div`
  ${flex.COLUMN_FLEX};
`;
const MessageLayout = styled.div`
  ${flex.END};
`;
const MessageBox = styled.div`
  padding: 8px 14px;
  border-radius: 20px;
  background: ${theme.basicPurple};
  max-width: 100%; /* MainLayout의 너비를 넘지 않도록 설정 */
  word-wrap: break-word;
  word-break: break-word; /* 긴 단어를 자동으로 줄바꿈 */
`;

const Text = styled.pre`
  ${font.Text};
  color: ${theme.grey200};
  white-space: pre-wrap; /* 줄바꿈 처리 */
  word-wrap: break-word; /* 단어가 넘칠 경우 줄바꿈 */
  word-break: break-word;
  max-width: 100%; /* 텍스트가 MainLayout의 너비를 넘지 않도록 설정 */
`;

interface UserChatBoxProps {
  children?: React.ReactNode;
}

const UserChatBox = ({ children }: UserChatBoxProps) => {
  return (
    <Layout>
      <MessageLayout>
        <MessageBox>
          <Text>{children}</Text>
        </MessageBox>
      </MessageLayout>
    </Layout>
  );
};

export default UserChatBox;
