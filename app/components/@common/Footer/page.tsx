"use client";

import Logo from "@/assets/logo";
import GithubIcon from "@/assets/github.svg";
import Image from "next/image";
import * as S from "./style";

const Footer = () => {
  const handleGithubClick = () => {
    window.location.href = "https://github.com/Musicany/Musicany_Web";
  };

  return (
    <S.Footer>
      <S.Layout>
        <S.LeftFooter>
          <S.CompanyLayout>
            <S.LogoLayout>
              <Logo theme="light" />
            </S.LogoLayout>
            <S.CompanyInfo>
              <S.Info>상호 : 뮤지캐니</S.Info>
              <S.Info>개발자명 : 최성훈</S.Info>
              <S.Info>Email : chltjdgns1009@gmail.com</S.Info>
            </S.CompanyInfo>
          </S.CompanyLayout>
          <S.GreyLine />
          <S.Info>© 2024. Musicany. All rights reserved.</S.Info>
        </S.LeftFooter>
        <S.RightFooter>
          <S.Info>
            회사소개 | 이용약관 | 개인정보처리방침 | 취소/환불 정책 | 자주 묻는
            질문 | 공지사항
          </S.Info>
          <S.Github onClick={handleGithubClick}>
            <Image
              src={GithubIcon}
              alt="github"
              layout="responsive"
              height={50}
              width={50}
            />
          </S.Github>
        </S.RightFooter>
      </S.Layout>
    </S.Footer>
  );
};

export default Footer;
