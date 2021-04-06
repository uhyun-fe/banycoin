import React, { useState } from "react";

import View from "./CoinStyle";
import { coinIcon, pickaxeIcon } from "../../assets/images/index";
import CoinLogic from "./CoinLogic";

const Coin = ({ pickaxe, setPickaxe }) => {
   const { setMagicNumberList, successList } = CoinLogic();

   const [banycoin, setBanycoin] = useState(0);
   const [magicNumber, setMagicNumber] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);

   return (
      <View>
         <span className="pickaxe">
            <img src={pickaxeIcon} alt="pickaxe" /> X {pickaxe}
         </span>
         <span className="text">
            매직넘버를 더해 <strong>10</strong>이 되면 채굴 성공!
         </span>
         <span className="text">
            매직넘버가 모두 <strong>7</strong>로 나오면 <strong>10 BNC</strong> 채굴!
         </span>
         {magicNumber && (
            <div className="number_area">
               <span>{magicNumber && magicNumber[0]}</span>
               <span>{magicNumber && magicNumber[1]}</span>
               <span>{magicNumber && magicNumber[2]}</span>
            </div>
         )}
         <button
            onClick={() => {
               if (!pickaxe) return alert("채굴기회가 없습니다.");
               setMagicNumber(setMagicNumberList({ setIsSuccess, banycoin, setBanycoin, pickaxe, setPickaxe }));
            }}
         >
            채굴
         </button>
         <span className="isSuccess">{magicNumber && (isSuccess ? "Success!" : "Failed..")}</span>
         <div className="table">
            <table>
               <thead>
                  <tr>
                     <th>획득시간</th>
                     <th>매직넘버</th>
                     <th>획득코인</th>
                  </tr>
               </thead>
               <tbody>
                  {successList &&
                     successList.map((item, index) => (
                        <tr key={index}>
                           <td>{item.time}</td>
                           <td>{item.number.map((num) => num + " ")}</td>
                           <td>{item.coin} BNC</td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
         <div className="total_area">
            <img src={coinIcon} alt="banycoin" />
            <span className="banycoin">{banycoin}</span>BNC
         </div>
         <span className="text desc">
            <span>
               * 채굴기회
               <img src={pickaxeIcon} alt="pickaxe" />는 왼쪽의 단어입력게임을 통해 얻으실 수 있습니다.
            </span>
            <span>* 바니코인은 저장되지 않습니다. 새로고침시 리셋됩니다.</span>
         </span>
      </View>
   );
};

export default Coin;
