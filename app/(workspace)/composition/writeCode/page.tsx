"use client";

import React from "react";

import CompositionModal from "@/components/modals/compositionModal/page";
import styled from "styled-components";
import { flex } from "@/styles";

const Layout = styled.div`
  background-color: #353535;
  width: 100%;
  height: 100vh;
  ${flex.CENTER};
`;

const WriteCode = () => {
  return (
    <Layout>
      <CompositionModal
        type="write"
        title="환상적인 코드를 입력해주세요!"
        subTitle="코드는 4마디 또는 8마디를 입력해주세요"
      />
    </Layout>
  );
};

export default WriteCode;
