import { Outlet } from "react-router";
import { FooterSection } from "../global/FooterSection";
import { useState } from "react";

import useIsMobile from "../../hook/useIsMobile";
import MobileHeader from "../global/mobile/MobileHeader";
import MobileNavbar from "./../global/mobile/MobileNavbar";
import DeskHeader from "../global/desktop/DeskHeader";
import DeskNavbar from "./../global/desktop/DeskNavbar";
import { MobileMenu } from "../global/mobile/MobileMenu";

export const Layout = () => {
  const isMobile = useIsMobile(1024);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-Poppins bg-light-gray min-h-screen">
      {isMobile && <MobileMenu isOpen={isOpen} onClose={closeMenu} />}
      {isMobile ? <MobileHeader onOpen={openMenu} /> : <DeskHeader />}
      {isMobile ? <MobileNavbar /> : <DeskNavbar />}
      <Outlet />
      <FooterSection />
    </div>
  );
};
export default Layout;
