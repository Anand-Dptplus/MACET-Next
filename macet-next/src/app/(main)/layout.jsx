import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
        <main>{children}</main>
      <Footer />
    </>
  );
}