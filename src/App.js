import Die from "./assets/components/Die";
import React, { useEffect } from "react";
import {nanoid} from "nanoid";


function App() {
  const rollDiceFunc = ()=> Math.floor(6*Math.random());
  const initialDiceArray =Array.from({ length: 10 },rollDiceFunc);
  const initialState = initialDiceArray.map(  element=>(  {value : element, isHeld : false, id : nanoid()} ) );
  const [dice,setDice] = React.useState(initialState);
  
  //we will create a state to keep track if the use won or not:
  const [tenzies, setTenzies]=React.useState(false);
  //we only wanted to run if we update our array of dices somehow 
  React.useEffect(()=>{
    const newArrayTrueisHeld = dice.filter(element=>element.isHeld);
    const firstValue = dice[0].value;
    const sameValuesArray = dice.filter(element=> element.value ===firstValue)
    if (sameValuesArray.length===10 && newArrayTrueisHeld.length===sameValuesArray.length) { setTenzies(true)};
    
  },[dice])

  //create the tags to render the dices
  const diceArraysTags = dice.map(oneDice=><Die value={oneDice.value} key={oneDice.id} isHeld={oneDice.isHeld}
    holdDice={()=>holdDice(oneDice.id)} />);

  //console.log(rollDiceFunc())
  //create function that will be used to change the values of the dices id the isHeld is false
  //used ternary to return in a single line. 
  //Because we use .map this function will be applied to each of the elements of the array individually
  //and each element is an object, therefore we need to open it up and then overwirte the value of it
  const changeValuesFunc = element=> !element.isHeld ? { ...element, value: rollDiceFunc()} : element;

  //this function updates the color or the dice we clicked by checking the id.
  const holdDice = id => setDice(prevDice=>prevDice.map(elemnt=>elemnt.id===id? {...elemnt, isHeld: !elemnt.isHeld} : elemnt));

  return (
    <main className="App">
      <h1 className="title">Tenzies</h1>
      <p>Roll untill all dice are the same. Click each to freeze it at its current value between rolls.</p>
      <div  className='dices-container'>
        {diceArraysTags}
      </div>
      <button className="rolldice_button" onClick={()=>setDice(prevArray=>prevArray.map(changeValuesFunc))}>Roll</button>
    </main>
  );
}

export default App;
