import { Outlet } from "react-router";
import { FooterSection } from "../global/FooterSection";

export const Layout = () => {
  return (
    <div className="font-Poppins bg-light-gray min-h-screen">
      <Outlet />
      <FooterSection />
    </div>
  );
};
export default Layout;
