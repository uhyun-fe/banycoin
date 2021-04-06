import React, { useState } from "react";

import View from "./style";
import Game from "./components/Game/Game";
import Coin from "./components/Coin/Coin";

const App = () => {
   const [pickaxe, setPickaxe] = useState(0);

   return (
      <View>
         <div className="game_zone">
            <Game pickaxe={pickaxe} setPickaxe={setPickaxe} />
         </div>
         <div className="coin_zone">
            <Coin pickaxe={pickaxe} setPickaxe={setPickaxe} />
         </div>
      </View>
   );
};

export default App;
