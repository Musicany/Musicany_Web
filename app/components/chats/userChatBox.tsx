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
`;
const Text = styled.pre`
  ${font.Text};
  color: ${theme.grey200};
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
