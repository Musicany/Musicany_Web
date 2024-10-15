"use client";

import React, { ReactNode } from "react";
import { styled } from "styled-components";
import { flex, font, theme } from "@/styles";
import PlusIcon from "@/assets/plusIcon";

interface AddButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonLayout = styled.button`
  ${flex.CENTER};
  padding: 6px 12px 6px 10px;
  background-color: ${theme.basicPurple};
  border-radius: 6px;
  color: ${theme.white};
  ${font.SmallText};

  &:hover {
    background-color: #7131d0;
  }
`;

const AddButton = ({ children, onClick }: AddButtonProps) => {
  return (
    <ButtonLayout onClick={onClick}>
      <PlusIcon />
      {children}
    </ButtonLayout>
  );
};

export default AddButton;
