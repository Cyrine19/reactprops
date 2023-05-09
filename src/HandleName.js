import React from "react";

function HandleName (props){
    function HandleClick(){
        
        alert(props.FullName);
    }
    return(
    <div>
        <button onClick={HandleClick}>Click Me</button>
    </div>
    );
}

export default HandleName ;