import styled from "styled-components";
import { flex, font, theme } from "@/styles";

export const Layout = styled.div`
  background-color: #353535;
  width: 100%;
  height: 100vh;
  ${flex.CENTER};
`;
export const ChooseModal = styled.div`
  padding: 52px 102px;
  ${flex.CENTER};
  background-color: ${theme.white};
  border-radius: 12px 12px 0px 0px;
  border: 1px solid #ccc;
  box-shadow:
    347px 379px 144px 0 rgba(0, 0, 0, 0),
    222px 243px 132px 0 rgba(0, 0, 0, 0.02),
    125px 137px 111px 0 rgba(0, 0, 0, 0.06),
    56px 61px 82px 0 rgba(0, 0, 0, 0.1),
    14px 15px 45px 0 rgba(0, 0, 0, 0.12);
  position: relative;
`;
export const FooterLine = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -1px;
  width: calc(100% + 2px);
  height: 8px;
  background-color: ${theme.basicPurple};
`;
export const ContentLayout = styled.div`
  ${flex.COLUMN_CENTER};
  gap: 40px;
`;
export const Title = styled.p`
  ${font.SmallTitle};
  font-weight: 600;
`;
export const SelectLayout = styled.div`
  ${flex.COLUMN_CENTER};
  width: 85%;
  gap: 8px;
`;
export const Select = styled.button`
  ${flex.CENTER};
  width: 100%;
  padding: 12px 0;
  background-color: ${theme.white};
  border-radius: 8px;
  border: 1px solid #ccc;
  
  &:hover {
    background-color: ${theme.grey100};
  }
`;
