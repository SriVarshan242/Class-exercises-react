import React,{useState} from "react";
function Togglemessage()
{
    const[istoggle,setistoggle]=useState(true);
    function click()
    {
        setistoggle(!istoggle);
    }
    return (
        <div>
            <button onClick={click}>{istoggle ? "show component" : "hide component"}</button>
            {istoggle && <p>hi how are you</p>}
        </div>
    )
}
export default Togglemessage;