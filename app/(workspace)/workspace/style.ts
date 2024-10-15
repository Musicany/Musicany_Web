import styled from "styled-components";
import { flex, font, theme } from "@/styles";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #313131;
  ${flex.FLEX};
`;
export const SideLayout = styled.div`
  width: 20%;
  background-color: #1f1f1f;
  padding: 0 32px;
  flex-grow: 1;
`;
export const RightLayout = styled.div`
  width: 80%;
  height: 100%;
  padding: 68px 100px;
  ${flex.COLUMN_START};
`;
export const ContentLayout = styled.div`
  ${flex.COLUMN_CENTER};
  gap: 36px;
  width: 100%;
`;
export const ContentHeader = styled.div`
  ${flex.FLEX};
  width: 100%;
`;
export const WorkTitle = styled.p`
  ${font.SmallTitle};
  color: ${theme.white};
`;
export const Works = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개의 Work */
  gap: 20px 30px;
`;
export const Work = styled.div`
  ${flex.COLUMN_FLEX};
  padding: 12px 16px;
  gap: 8px;
  border-radius: 6px;
  border: 2px solid ${theme.grey800};
  background: ${theme.grey900};
  width: 100%;
`;
export const Title = styled.p`
  ${font.Text};
  color: ${theme.grey300};
`;
export const Date = styled.p`
  color: ${theme.grey700};
  ${font.SmallText};
`;
export const NameLayout = styled.div`
  width: 100%;
  border-left: 1px solid ${theme.basicPurple};
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 56px;
`;
export const UserName = styled.p`
  ${font.BigText};
  color: ${theme.white};
`;
export const StepLayout = styled.div`
  width: 100%;
  ${flex.COLUMN_CENTER};
  gap: 10px;
  margin-top: 20px;
  border-top: 1px solid ${theme.grey900};
  border-bottom: 1px solid ${theme.grey900};
`;
export const Step = styled.button`
  width: 100%;
  ${flex.CENTER};
  color: ${theme.grey500};
  ${font.Text};
  padding: 20px 0;

  &:hover {
    background-color: #1b1b1b;
  }
`;
