import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="font-Poppins bg-light-gray min-h-screen">
      <Outlet />
    </div>
  );
};
export default Layout;
