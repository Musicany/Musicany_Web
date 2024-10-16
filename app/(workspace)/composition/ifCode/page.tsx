"use client";

import React from "react";
import styled from "styled-components";
import { flex } from "@/styles";

import CompositionModal from "@/components/modals/compositionModal/page";

const Layout = styled.div`
  background-color: #353535;
  width: 100%;
  height: 100vh;
  ${flex.CENTER};
`;

const IfCode = () => {
  return (
    <Layout>
      <CompositionModal
        type="choose"
        title="이미 생각한 코드진행이 있으신가요?"
        subTitle="코드가 이미 있으시다면 ‘예' 를 클릭해주세요"
      />
    </Layout>
  );
};

export default IfCode;
