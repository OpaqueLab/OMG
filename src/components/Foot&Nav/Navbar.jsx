import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVariants = {
    scrolled: { backgroundColor: "white", color: "black" },
    notScrolled: { backgroundColor: "transparent", color: "white" },
  };

  const navData = [
    {
      id: 1,
      title: "Merch",
      addition: [
        { id: 1, title: "addition" },
        { id: 2, title: "addtion" },
        { id: 3, title: "additon" },
      ],
    },
    {
      id: 2,
      title: "Music",
      addition: [
        { id: 1, title: "addition" },
        { id: 2, title: "addtion" },
        { id: 3, title: "additon" },
      ],
    },
    { id: 3, title: "Artists" },
    {
      id: 5,
      title: "Collections",
      addition: [
        { id: 1, title: "addition" },
        { id: 2, title: "addtion" },
        { id: 3, title: "additon" },
      ],
    },
    {
      id: 6,
      title: "Collaborations",
      addition: [
        { id: 1, title: "addition" },
        { id: 2, title: "addtion" },
        { id: 3, title: "additon" },
      ],
    },
    { id: 7, title: "Interscope Vinyl Collective" },
    { id: 8, title: "24 GRAMMY® Nominees" },
  ];

  return (
    <motion.div
      variants={navbarVariants}
      animate={isScrolled ? "scrolled" : "notScrolled"}
      className={` ${
        isScrolled ? " fixed top-0" : " absolute top-0"
      }  top-0 z-10 text-white w-full`}
    >
      <div className="flex gap-2 items-center p-5 justify-end">
        {navData.map((el) => {
          return (
            <motion.div
              key={el.id}
              className="text-lg relative flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setOpenDropdown(el.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* parent title */}
              <motion.div className="flex justify-center items-center hover:text-red-500 transition duration-150">
                [<p>{el.title}</p>
                {el?.addition ? (
                  <IoIosArrowDown className="text-[15px] font-bold" />
                ) : (
                  ""
                )}
                ]
              </motion.div>
              {/* child dropdown */}
              {openDropdown === el.id && el?.addition && (
                <motion.div
                  className="absolute top-full left-0 px-5 py-2 flex flex-col bg-white shadow-md gap-2"
                  variants={navbarVariants}
                  animate={isScrolled ? "scrolled" : "notScrolled"}
                  // initial={{ opacity: 0, y: -10 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -10 }}
                >
                  {el.addition.map((child) => (
                    <motion.p
                      className="hover:text-red-500 transition duration-150"
                      key={child.id}
                    >
                      {child.title}
                    </motion.p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar;
