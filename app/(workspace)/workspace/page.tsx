"use client";

import React, {useEffect, useState} from "react";

import AddButton from "@/components/buttons/addButton";
import { useRouter } from "next/navigation";
import * as S from "./style";

const Workspace = () => {
  const router = useRouter();
  const [userName, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <S.Layout>
      <S.SideLayout>
        <S.NameLayout>
          <S.UserName>{userName}</S.UserName>
        </S.NameLayout>
        <S.StepLayout>
          <S.Step>Composing</S.Step>
          <S.Step>Instrument</S.Step>
          <S.Step>Sheet Music</S.Step>
        </S.StepLayout>
      </S.SideLayout>
      <S.RightLayout>
        <S.ContentLayout>
          <S.ContentHeader>
            <S.WorkTitle>Works</S.WorkTitle>
            <AddButton onClick={() => router.push("/composition/ifCode")}>
              Create
            </AddButton>
          </S.ContentHeader>
          <S.Works>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
            <S.Work>
              <S.Title>제목입니다제목입니다</S.Title>
              <S.Date>2024.10.09</S.Date>
            </S.Work>
          </S.Works>
        </S.ContentLayout>
      </S.RightLayout>
    </S.Layout>
  );
};

export default Workspace;
