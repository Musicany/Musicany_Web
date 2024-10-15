import StyledComponentsRegistry from "@/lib/styledComponentsRegistry";
// eslint-disable-next-line import/no-named-as-default
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
