import styled from "styled-components";
import { flex, font, theme } from "@/styles";

export const Footer = styled.footer`
  width: 100%;
  height: 256px;
  background-color: #333;
  ${flex.BETWEEN};
`;
export const Layout = styled.div`
  ${flex.BETWEEN};
  width: 100%;
  align-items: stretch;
`;
export const LeftFooter = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 24px;
  margin-left: 180px;
`;
export const CompanyLayout = styled.div`
  ${flex.COLUMN_CENTER};
  align-items: start;
  gap: 16px;
`;
export const LogoLayout = styled.div``;
export const CompanyInfo = styled.div`
  ${flex.COLUMN_FLEX};
  align-items: start;
`;
export const Info = styled.p`
  ${font.SmallText};
  color: ${theme.grey400};
`;
export const GreyLine = styled.div`
  width: 130%;
  height: 1px;
  background-color: ${theme.grey900};
`;
export const RightFooter = styled.div`
  ${flex.COLUMN_FLEX};
  justify-content: space-between;
  align-items: end;
  margin-right: 180px;
`;
export const Github = styled.div`
  cursor: pointer;
`;
