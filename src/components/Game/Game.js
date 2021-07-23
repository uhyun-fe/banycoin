import React, { useEffect, useRef, useState } from "react";

import View from "./GameStyle";
import { pickaxeIcon } from "../../assets/images";
import data from "../../assets/contents/words.json";
import GameLogic from "./GameLogic";

const Game = ({ pickaxe, setPickaxe }) => {
   const [words, setWords] = useState(data.words[parseInt(Math.random() * 10)]);

   const { isRightWord } = GameLogic({ words });
   const inputRef = useRef(null);

   const removeWordInScreen = ({ inputRef, value }) => {
      inputRef.current.value = "";
      value !== null && setWords(words.map((item) => (item === value ? "" : item)));
      value !== null && setPickaxe(pickaxe + 1);
   };

   useEffect(() => {
      if (words && !words.filter((item) => item).length) setWords(data.words[parseInt(Math.random() * 10)]);
   }, [words]);

   return (
      <View>
         <div className="word_area">
            <ul>{words && words.map((item, index) => <li key={index}>{item}</li>)}</ul>
         </div>
         <div className="input_area">
            <span>
               <img src={pickaxeIcon} alt="pickaxe" /> X {pickaxe}
            </span>
            <input
               type="text"
               ref={inputRef}
               placeholder="단어를 입력하세요"
               onKeyPress={({ key, target: { value } }) =>
                  key === "Enter" && removeWordInScreen({ inputRef, value: isRightWord({ value }) ? value : null })
               }
            />
         </div>
      </View>
   );
};

export default Game;
