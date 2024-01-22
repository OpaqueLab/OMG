import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function TemporaryDrawer() {
  // for inner data
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
  const [openDropdown, setOpenDropdown] = React.useState(null);

  // for drawer
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="flex flex-col gap-3">
        {navData.map((el) => {
          return (
            <motion.div
              key={el.id}
              className="text-lg  flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setOpenDropdown(el.id)}
              // onMouseLeave={() => setOpenDropdown(null)}
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
                <motion.div className="top-full left-0 px-5 py-2 flex flex-col gap-2">
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
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <div className="bg-white w-12 h-12 text-[15px] rounded-full flex items-center justify-center" onClick={toggleDrawer("left", true)}>Left</div>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
