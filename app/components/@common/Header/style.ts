import styled from "styled-components";
import { flex, font, theme } from "@/styles";
import Link from "next/link";

export const Layout = styled.div`
  width: 100%;
  height: 68px;
  ${flex.BETWEEN};
  position: relative;
`;
export const LogoLayout = styled.div`
  margin-left: 7%;
`;
export const LoginNav = styled.div`
  margin-right: 7%;
  ${flex.FLEX};
  gap: 4px;
  height: 100%;
`;
export const MainNav = styled.div`
  ${flex.FLEX};
  gap: 4px;
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
`;
export const NavItem = styled(Link)<{ $isHovered: boolean }>`
  ${font.Text};
  color: ${({ $isHovered }) =>
    $isHovered ? `${theme.grey500}` : `${theme.grey1000}`};
  transition: color 0.3s ease;
  ${flex.CENTER};
`;
export const NavText = styled.span`
  ${font.Text};
  padding: 0 16px;
`;
