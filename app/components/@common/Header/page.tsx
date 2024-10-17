"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo";
import * as S from "./style";

const Header = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    setUsername(null);
  };

  // eslint-disable-next-line consistent-return
  const handleWorkspaceClick = () => {
    if (!username) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    router.push("/workspace"); // 로그인 상태일 때 서비스로 이동
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
          onClick={handleWorkspaceClick} // 클릭 시 처리
        >
          <S.NavText>WorkSpace</S.NavText>
        </S.NavItem>
        <S.NavItem
          $isHovered={hoveredIndex !== null && hoveredIndex !== 2}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <S.NavText>Guide</S.NavText>
        </S.NavItem>
      </S.MainNav>

      <S.LoginNav>
        {username ? (
          <S.NavItem
            $isHovered={hoveredIndex !== null && hoveredIndex === 5}
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={handleLogout}
          >
            <S.NavText>{username}님</S.NavText>
          </S.NavItem>
        ) : (
          <>
            <S.NavItem
              $isHovered={hoveredIndex !== null && hoveredIndex !== 3}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push("/signin")}
            >
              <S.NavText>Sign In</S.NavText>
            </S.NavItem>
            <S.NavItem
              $isHovered={hoveredIndex !== null && hoveredIndex !== 4}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push("/signup")}
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
