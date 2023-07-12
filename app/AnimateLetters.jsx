import React from "react";
import { motion } from "framer-motion";
import { Animations } from "./variants";

function AnimateLetters({ title }) {
  // splite words
  const splitWords = title.split(" ");

  // splite words to letters
  const words = splitWords.map((word) => {
    return word.split("");
  });

  //  adding spacing
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <motion.div className=" overflow-hidden  ">
      {words.flat().map((element, index) => {
        return (
          <motion.span
            className="inline-block text-3xl md:text-4xl font-cal mt-3 transition duration-500"
            variants={Animations.letter}
            key={index}
          >
            {element}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimateLetters;
