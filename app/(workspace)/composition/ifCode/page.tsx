"use client";

import React from "react";

import CompositionModal from "@/components/modals/compositionModal/page";
import * as S from "./style";

const IfCode = () => {
  return (
    <S.Layout>
      <CompositionModal
        type="choose"
        title="이미 생각한 코드진행이 있으신가요?"
        subTitle="코드가 이미 있으시다면 ‘예' 를 클릭해주세요"
      />
    </S.Layout>
  );
};

export default IfCode;
