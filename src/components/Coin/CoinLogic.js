import React, { useState } from "react";

const CoinLogic = () => {
   const [successList, setSuccessList] = useState([]);

   // 매직넘버 생성
   const makeNewMagicNumber = () => {
      return [...Array(3)].map((n) => parseInt(Math.random() * 10));
   };

   const isTen = ({ list }) => {
      return list.reduce((a, c) => a + c, 0) === 10;
   };

   const isLucky = ({ list }) => {
      return list.filter((n) => n === 7).length === list.length;
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
