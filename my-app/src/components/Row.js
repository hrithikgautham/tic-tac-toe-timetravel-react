import React from "react"
import Cell from "./Cell"

let Row = (props) =>{
    return (
        <tr className = "table">
           <Cell player = {props.player[0]} index = {props.index} onClick = {props.onClick}/>
           <Cell player = {props.player[1]} index = {props.index} onClick = {props.onClick}/>
           <Cell player = {props.player[2]} index = {props.index} onClick = {props.onClick}/>
        </tr>
    )
}

export default Row;