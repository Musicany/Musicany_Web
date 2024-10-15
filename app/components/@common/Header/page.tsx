"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo";
import { signIn } from "next-auth/react";
import * as S from "./style";

const Header = () => {
  const router = useRouter();
  const navList = [
    { id: 1, title: "WorkSpace", navigate: "workspace" },
    { id: 2, title: "Guide", navigate: "guide" },
    { id: 3, title: "Sign In", navigate: "signin" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <S.Layout>
      <S.LogoLayout onClick={() => router.push("/main")}>
        <Logo theme="dark" />
      </S.LogoLayout>
      <S.MainNav>
        {navList.map((item) =>
          item.id <= 2 ? (
            <S.NavItem
              key={item.id}
              $isHovered={hoveredIndex !== null && hoveredIndex !== item.id}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              href={item.navigate}
            >
              <S.NavText>{item.title}</S.NavText>
            </S.NavItem>
          ) : null,
        )}
      </S.MainNav>
      <S.LoginNav>
        <S.NavItem
          key={3}
          $isHovered={hoveredIndex !== null && hoveredIndex !== 3}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={(event) => {
            event.preventDefault(); // 기본 페이지 이동 막기
            signIn();
          }}
          href=""
        >
          <S.NavText>Sign In</S.NavText>
        </S.NavItem>
      </S.LoginNav>
    </S.Layout>
  );
};

export default Header;
