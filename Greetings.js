import React from "react";

function Greetings(props){
    return(
        <h1 style={{color:"blue",backgroundColor:"black",paddingRight:"40px"}}>Welcome,{props.name}!</h1>
    )
}
export default Greetings;