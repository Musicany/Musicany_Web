import styled from "styled-components";
import { flex, font, theme } from "@/styles";

export const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  background-color: ${theme.white};
  ${flex.CENTER};
`;
export const FormLayout = styled.div`
  padding: 36px 28px;
  width: 400px;
  ${flex.COLUMN_FLEX};
  background-color: ${theme.white};
  box-shadow:
    -295px 376px 134px 0 rgba(0, 0, 0, 0),
    -189px 240px 122px 0 rgba(0, 0, 0, 0.01),
    -106px 135px 103px 0 rgba(0, 0, 0, 0.05),
    -47px 60px 76px 0 rgba(0, 0, 0, 0.09),
    -12px 15px 42px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
export const Form = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX};
  gap: 36px;
`;
export const SignUpTitle = styled.p`
  width: 100%;
  ${font.BigText};
  color: ${theme.grey1000};
`;
export const Inputs = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX};
  gap: 20px;
`;
export const Input = styled.input`
  width: 100%;
  ${flex.VERTICAL};
  padding: 10px 0 10px 12px;
  border-bottom: 1px solid ${theme.grey1000};

  &::placeholder {
    color: ${theme.grey400};
  }
`;
export const SubmitButton = styled.button`
  ${flex.CENTER};
  color: ${theme.white};
  ${font.SmallText};
  background-color: ${theme.basicPurple};
  width: 100%;
  padding: 12px 0;
  border-radius: 8px;

  &:hover {
    background-color: #7032cd;
  }
`;
