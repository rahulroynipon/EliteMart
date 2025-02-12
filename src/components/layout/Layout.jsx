import { Outlet } from "react-router";
import { FooterSection } from "../global/FooterSection";
import DeskNavbar from "../global/DeskNavbar";
import useIsMobile from "../../hook/useIsMobile";
import DeskHeader from "../global/DeskHeader";

export const Layout = () => {
  const isMobile = useIsMobile(1024);

  return (
    <div className="font-Poppins bg-light-gray min-h-screen">
      {isMobile ? null : <DeskHeader />}
      {isMobile ? null : <DeskNavbar />}
      <Outlet />
      <FooterSection />
    </div>
  );
};
export default Layout;
