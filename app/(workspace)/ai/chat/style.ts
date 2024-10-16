import styled from "styled-components";
import { flex, font, theme } from "@/styles";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #353535;
  ${flex.CENTER};
`;
export const WhiteLayout = styled.div`
  width: 60%;
  height: 80%;
  background-color: ${theme.white};
  border-radius: 16px;
`;
export const MainLayout = styled.div`
  ${flex.COLUMN_VERTICAL};
  gap: 14px;
  padding: 16px 20px;
  height: 88.5%;
  overflow: auto;
`;
export const StartComment = styled.p`
  ${font.SmallText};
  color: ${theme.grey800};
`;
export const ChatLayout = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX}
  gap: 4px;
`;
export const InputLayout = styled.div`
  height: 11.5%;
  background-color: ${theme.white};
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 16px;
`;
export const InputWithIcon = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;
export const Input = styled.input`
  padding: 6px 12px 6px 16px;
  border-radius: 8px;
  border: 1px solid ${theme.grey400};
  background: ${theme.white};
  width: 100%;
  height: 100%;
`;
export const SendIconLayout = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  ${flex.CENTER};
  cursor: pointer;
`;
