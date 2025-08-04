import MainHeader from "@/components/layout/MainHeader";

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
        <main>{children}</main>
    </>
  );
}