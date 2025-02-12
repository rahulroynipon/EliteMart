import Container from "./Container";
import { NavLink } from "react-router";

const DeskNavbar = () => {
  const navItems = [
    {
      _id: "home",
      label: "Home",
      link: "/",
    },
    {
      _id: "all-products",
      label: "All Products",
      link: "/",
    },
    {
      _id: "updates",
      label: "Updates",
      link: "/",
    },
    {
      _id: "order-track",
      label: "Order Track",
      link: "/",
    },
    {
      _id: "contact-us",
      label: "Contact Us",
      link: "/",
    },
  ];

  return (
    <div className="bg-primary">
      <Container>
        <ul className="flex space-x-8 items-center text-white/95 font-medium h-12 ">
          <li className="w-[20rem] text-center bg-green-900 py-3">
            {" "}
            Categories
          </li>
          {navItems?.map((item) => (
            <li key={item._id} className="shrink-0">
              <NavLink to={item.link} className="px-3 py-3">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default DeskNavbar;
