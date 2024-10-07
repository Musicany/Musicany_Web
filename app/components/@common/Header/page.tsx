"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo";
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
        {navList.map((item) =>
          item.id === 3 ? (
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
      </S.LoginNav>
    </S.Layout>
  );
};

export default Header;
