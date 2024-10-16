import styled from "styled-components";
import { flex, font, theme } from "@/styles";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #353535;
  ${flex.CENTER};
`;
export const WhiteLayout = styled.div`
  min-width: 60%;
  min-height: 80%;
  background-color: ${theme.white};
  ${flex.COLUMN_VERTICAL};
  gap: 14px;
  padding: 16px 20px;
  border-radius: 16px;
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
