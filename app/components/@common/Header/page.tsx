"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo";
import { signIn, signOut, useSession } from "next-auth/react";
import * as S from "./style";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleWorkspaceClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (!session) {
      alert("로그인이 필요한 서비스입니다.");
    } else {
      router.push("/workspace");
    }
  };

  return (
    <S.Layout>
      <S.LogoLayout onClick={() => router.push("/main")}>
        <Logo theme="dark" />
      </S.LogoLayout>

      <S.MainNav>
        <S.NavItem
          $isHovered={hoveredIndex !== null && hoveredIndex !== 1}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          href="workspace"
          onClick={handleWorkspaceClick}
        >
          <S.NavText>WorkSpace</S.NavText>
        </S.NavItem>
        <S.NavItem
          $isHovered={hoveredIndex !== null && hoveredIndex !== 2}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          href="guide"
        >
          <S.NavText>Guide</S.NavText>
        </S.NavItem>
      </S.MainNav>

      <S.LoginNav>
        {session ? (
          <S.NavItem
            $isHovered={hoveredIndex !== null && hoveredIndex !== 3}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => signOut()}
            href="#"
          >
            <S.NavText>{session.user?.name}님</S.NavText>
          </S.NavItem>
        ) : (
          <>
            <S.NavItem
              $isHovered={hoveredIndex !== null && hoveredIndex !== 3}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(event) => {
                event.preventDefault();
                signIn();
              }}
              href=""
            >
              <S.NavText>Sign In</S.NavText>
            </S.NavItem>
            <S.NavItem
              $isHovered={hoveredIndex !== null && hoveredIndex !== 4}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
              href="/register"
            >
              <S.NavText>Sign Up</S.NavText>
            </S.NavItem>
          </>
        )}
      </S.LoginNav>
    </S.Layout>
  );
};

export default Header;
