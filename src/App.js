import Die from "./assets/components/Die";
import React from "react";


function App() {
  const rollDiceFunc = ()=> Math.floor(6*Math.random());
  const initialDiceArray =Array.from({ length: 10 },rollDiceFunc);
  const [dice,setDice] = React.useState(initialDiceArray);

  //create the tags to render the dices
  const diceArraysTags = dice.map(oneDiceValue=><Die value={oneDiceValue} />)

  //console.log(initialDiceNum())
  return (
    <main className="App">
      <div  className='dices-container'>
        {diceArraysTags}
      </div>
      <button className="rolldice_button" onClick={()=>setDice(prevDice => prevDice.map(rollDiceFunc))}>Roll</button>
    </main>
  );
}

export default App;
