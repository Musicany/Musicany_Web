import Header from "@/components/@common/Header/page";
import Footer from "@/components/@common/Footer/page";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
