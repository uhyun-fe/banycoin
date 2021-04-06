import React from "react";

const GameLogic = ({ words }) => {
   const isRightWord = ({ value }) => {
      const result = words.filter((item) => item === value);
      return result.length > 0;
   };

   return { isRightWord };
};

export default GameLogic;
