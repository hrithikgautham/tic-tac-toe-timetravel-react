import React from "react";


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

export default function Table(props){
    return (
            <>
            <thead>
                <tr>
                <th>tic</th>
                <th>tac</th>
                <th>toe</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(0)}}>{props.player[0]}</td>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(1)}}>{props.player[1]}</td>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(2)}}>{props.player[2]}</td>
                </tr>
                <tr>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(3)}}>{props.player[3]}</td>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(4)}}>{props.player[4]}</td>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(5)}}>{props.player[5]}</td>
                </tr>
                <tr>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(6)}}>{props.player[6]}</td>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(7)}}>{props.player[7]}</td>
                    <td style = {cellStyle()} onClick = {() => {props.onClick(8)}}>{props.player[8]}</td>
                </tr>
            </tbody>
            </>
    )
}