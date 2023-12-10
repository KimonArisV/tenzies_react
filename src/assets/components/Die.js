
export default function Die(props){

    //create some styles for the boxes of the dices
    const styles = {
        backgroundColor: props.isHeld ? "green" : "white"
    }
    return(
        <div id="dice" style={styles} >
            <h2 id="dice-num">
                {props.value}
            </h2>
        </div>
    )
}