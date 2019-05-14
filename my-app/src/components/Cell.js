import React from "react"

let Cell = props => {
    return (
        <td>
            <input 
            style = {cellStyle()} 
            type = "button" 
            value = {props.player} 
            onClick = {() => {props.onClick(props.index);}}/>
        </td>
    )
}

function cellStyle(){
    return {
        border : "2px black solid",
        width : "100px",
        textAlign : "center",
        height : "100px",
        cursor : "pointer",
        fontSize :"50px"        
    }
}

export default Cell;