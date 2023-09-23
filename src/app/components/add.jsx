"use client"
import React, {useState} from "react";
import {useCallback} from "react";


export function Add(){
const [array, setArray] = useState([]);
const [text,setText] = useState("");


const handleAdd = useCallback(() => {
  setArray((prevArray) => {
    const newArray = [...prevArray,text];
    return newArray
  }
  );
},[text]);


 return(
  <>
<input
type="text"
value={text}
onChange={(e) => setText(e.target.value)}
></input>

<button className="bg-cyan-500 hover:bg-cyan-600 ... p-2" onClick={handleAdd}>テキスト追加表示</button>

<ul>
{array.map((item) => (
<li key={item}>{item}</li>
))}
</ul>
</>
 );


}