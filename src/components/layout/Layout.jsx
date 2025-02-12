import { Outlet } from "react-router";
import { FooterSection } from "../global/FooterSection";
import DeskNavbar from "../global/DeskNavbar";
import useIsMobile from "../../hook/useIsMobile";
import DeskHeader from "../global/DeskHeader";
import MobileNavbar from "../global/MobileNavbar";
import MobileHeader from "../global/MobileHeader";

export const Layout = () => {
  const isMobile = useIsMobile(1024);

  return (
    <div className="font-Poppins bg-light-gray min-h-screen">
      {isMobile ? <MobileHeader/> : <DeskHeader />}
      {isMobile ? <MobileNavbar /> : <DeskNavbar />}
      <Outlet />
      <FooterSection />
    </div>
  );
};
export default Layout;
