import React from "react";
import { useRouter } from "next/navigation";
import * as S from "./style";

// title과 subtitle을 추가한 인터페이스 정의
interface CompositionModalProps {
  type: "choose" | "write";
  title: string;
  subTitle: string;
}

const CompositionModal = ({ type, title, subTitle }: CompositionModalProps) => {
  const router = useRouter();
  return (
    <S.ChooseModal>
      <S.ContentLayout>
        <S.TitleLayout>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.TitleLayout>
        {type === "choose" ? (
          <S.SelectLayout>
            <S.Select onClick={() => router.push("/composition/writeCode")}>
              예
            </S.Select>
            <S.Select onClick={() => router.push("/composition/ai")}>
              아니요
            </S.Select>
          </S.SelectLayout>
        ) : (
          <S.Input placeholder="코드를 입력하세요" />
        )}
      </S.ContentLayout>
      <S.FooterLine />
    </S.ChooseModal>
  );
};

export default CompositionModal;
