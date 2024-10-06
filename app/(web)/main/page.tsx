"use client";

import art1 from "@/assets/art1.png";
import Image from "next/image";
import * as S from "./style";

const Main = () => {
  return (
    <S.Layout>
      <S.MainText>
        음악 창작을 쉽게, <S.BoldText>뮤직캐니</S.BoldText>에서 시작하세요
      </S.MainText>
      <S.PictureLayout>
        <Image src={art1} alt="image" />
      </S.PictureLayout>
    </S.Layout>
  );
};

export default Main;
