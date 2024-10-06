"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "@/styles";

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();

    return styles;
  });

  if (typeof window !== "undefined") return children;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
