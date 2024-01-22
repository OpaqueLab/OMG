import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  const containerVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <div className="mb-5" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        className=" text-black bg-white text-6xl lg:text-[40px] font-bold"
        variants={containerVariants}
        initial="animate"
        animate="animate"
        style={{ display: "inline-block" }}
      >
        OPAQUEINDUSTRIES OPAQUEINDUSTRIES OPAQUEINDUSTRIES OPAQUEINDUSTRIES{" "}
        OPAQUEINDUSTRIES OPAQUEINDUSTRIES OPAQUEINDUSTRIES OPAQUEINDUSTRIES{" "}
        OPAQUEINDUSTRIES OPAQUEINDUSTRIES OPAQUEINDUSTRIES{" "}
      </motion.div>
    </div>
  );
};

export default Marque;
