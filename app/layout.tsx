import StyledComponentsRegistry from "@/lib/styledComponentsRegistry";
import AuthContext from "../context/AuthContext";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>
        <AuthContext>{children}</AuthContext>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
