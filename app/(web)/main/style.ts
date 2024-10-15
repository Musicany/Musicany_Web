import styled from "styled-components";
import { flex, font } from "@/styles";

export const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_CENTER};
  padding: 0 7%;
  margin-bottom: 116px;
`;
export const MainText = styled.p`
  ${font.SmallTitle};
  text-align: center;
  margin-top: 64px;
`;
export const BoldText = styled.span`
  ${font.SmallTitle};
  font-weight: 700;
`;
export const PictureLayout = styled.div`
  width: 100%;
  height: 416px;
  margin-top: 76px;
`;
