import React, { useState } from "react";

const CoinLogic = () => {
   const [successList, setSuccessList] = useState([]);

   // 매직넘버 생성
   const makeNewMagicNumber = () => {
      let magicNumberList = [];
      for (let i = 0; i < 3; i++) {
         magicNumberList.push(parseInt(Math.random() * 10));
      }
      return magicNumberList;
   };

   const isTen = ({ list }) => {
      let result = 0;
      list.forEach((item) => {
         result += item;
      });
      return result === 10;
   };

   const isLucky = ({ list }) => {
      let result = 0;
      list.forEach((item) => {
         if (item !== 7) return;
         result++;
      });
      return result === 3;
   };

   const setMagicNumberList = ({ setIsSuccess, banycoin, setBanycoin, pickaxe, setPickaxe }) => {
      setIsSuccess(false);
      setPickaxe(pickaxe - 1);
      const result = makeNewMagicNumber();
      if (isTen({ list: result })) {
         setBanycoin(banycoin + 1);
         setSuccessList(successList.concat({ time: setNewDate(), number: result, coin: 1 }));
         setIsSuccess(true);
      }
      if (isLucky({ list: result })) {
         setBanycoin(banycoin + 3);
         setSuccessList(successList.concat({ time: setNewDate(), number: result, coin: 3 }));
         setIsSuccess(true);
      }
      return result;
   };

   // new Date 가공
   const setNewDate = () => {
      let now = new Date();
      return `${now.getFullYear().toString().substring(2)}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${
         now.getSeconds() < 10 ? "0" : ""
      }${now.getSeconds()}`;
   };

   return { setMagicNumberList, successList };
};

export default CoinLogic;
