import Die from "./assets/components/Die";
import React from "react";
//import {nanoid} from "nanoid";


function App() {
  const rollDiceFunc = ()=> Math.floor(6*Math.random());
  const initialDiceArray =Array.from({ length: 10 },rollDiceFunc);
  const initialState = initialDiceArray.map(  element=>(  {"value" : element, "isHeld" : false} ) );
  const [dice,setDice] = React.useState(initialState);
  
  //create the tags to render the dices
  const diceArraysTags = dice.map(oneDice=><Die value={oneDice.value} />);

  //console.log(rollDiceFunc())
  //create function that will be used to change the values of the dices id the isHeld is false
  //used ternary to return in a single line. 
  //Because we use .map this function will be applied to each of the elements of the array individually
  //and each element is an object, therefore we need to open it up and then overwirte the value of it
  const changeValuesFunc = element=> !element.isHeld ? { ...element, "value": rollDiceFunc()} : element;

  return (
    <main className="App">
      <div  className='dices-container'>
        {diceArraysTags}
      </div>
      <button className="rolldice_button" onClick={()=>setDice(prevArray=>prevArray.map(changeValuesFunc))}>Roll</button>
    </main>
  );
}

export default App;
