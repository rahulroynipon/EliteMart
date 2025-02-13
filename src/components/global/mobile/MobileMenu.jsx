import { useState } from "react";
import { MobileNavItem } from "./MobileNavItem";
import { MobileCategoryTab } from "./MobileCategoryTab";
import { IoMdArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const MobileMenu = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("menu");

  const tabs = [
    { _id: "menu", label: "Menu" },
    { _id: "categories", label: "Categories" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <section
        className={`fixed top-0 bottom-0 left-0 w-[20rem] shadow-lg border-r bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-[7rem]">
          <button
            onClick={onClose}
            className="h-12 w-full flex items-center justify-center space-x-2 font-medium bg-gradient-to-l from-blue-800 to-purple-900 text-white"
          >
            <IoMdArrowBack size={24} />
            <span>Back</span>
          </button>

          <ul className="flex bg-gray/20">
            {tabs.map((tab) => (
              <li
                key={tab._id}
                onClick={() => setActiveTab(tab._id)}
                className={`cursor-pointer py-4 px-4 w-1/2 uppercase font-medium transition-all duration-300 ${
                  activeTab === tab._id
                    ? "border-b-2 text-primary bg-gray/30"
                    : "text-gray-700"
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {activeTab === "menu" ? <MobileNavItem /> : <MobileCategoryTab />}
      </section>
    </>
  );
};
