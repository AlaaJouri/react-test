import React from "react";
import * as https from "https";
type Props={
    name:string
    alter:number
}
export default function Gallerie(props:Props) {
    return(
        <>
                 <h1> {props.name}</h1>
            <h1> {props.alter}</h1>
        </>
    )
}