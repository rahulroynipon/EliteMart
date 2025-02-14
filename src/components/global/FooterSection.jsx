import Info from "../../Data/info.json";
import Menu from "../../Data/menu.json";
import Logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router";

export const FooterSection = () => {
  return (
    <footer className="mt-16 mb-20 lg:mb-0 w-full bg-footer border-t border-gray-300 overflow-x-hidden">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-4 gap-8 px-5 xl:px-0 py-12"
      >
        {/* Logo & Description */}
        <div>
          {
            <Link to="/">
              <img className="h-26" src={Logo} alt="Elite Mart Logo" />
            </Link>
          }
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Elite is one of the leading lifestyle e-commerce platforms in
            Bangladesh.
          </p>
        </div>

        {/* Info Links */}
        <div>
          <h5 className="font-semibold text-lg text-gray-800">Information</h5>
          <ul className="mt-3 space-y-2">
            {Info.map((item) => (
              <li key={item._id}>
                <Link
                  to={item.link}
                  className="text-gray-600 hover:text-primary transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Links */}
        <div>
          <h5 className="font-semibold text-lg text-gray-800">Menu</h5>
          <ul className="mt-3 space-y-2">
            {Menu.map((item) => (
              <li key={item._id}>
                <Link
                  to={item.link}
                  className="text-gray-600 hover:text-primary transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h5 className="font-semibold text-lg text-gray-800">Contact Us</h5>
          <div className="mt-3 text-gray-600 text-sm">
            <p>House: 139, Road: 13, Sector: 10, Uttara, Dhaka</p>
            <p>
              Email:{" "}
              <a
                href="mailto:elitemart.com.bd@gmail.com"
                className="text-primary hover:underline"
              >
                elitemart.com.bd@gmail.com
              </a>
            </p>
            <p>
              Contact No:{" "}
              <a
                href="tel:+8801998888900"
                className="text-primary hover:underline"
              >
                01998888900
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <h5 className="text-lg font-semibold text-gray-800">
              Get in Touch
            </h5>
            <div className="flex space-x-3 mt-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center bg-[#5c7cbd] hover:opacity-80 transition"
              >
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center bg-primary hover:opacity-80 transition"
              >
                <IoLogoWhatsapp size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary border-t border-gray-300 py-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Elite Mart. All Rights Reserved.
      </div>
    </footer>
  );
};
