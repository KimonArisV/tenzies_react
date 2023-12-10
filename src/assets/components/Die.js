
export default function Die(props){
    return(
        <div id="dice" >
            <h2 id="dice-num">
                {props.value}
            </h2>
        </div>
    )
}