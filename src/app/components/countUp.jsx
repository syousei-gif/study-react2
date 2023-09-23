"use client"

import { use } from "react";
import {useState, useCallback} from "react";


export function CountUp(){
const [foo, setFoo] = useState(0);
const [bar, setBar] = useState(0);
const [count, setCount] = useState(0);

const countUp=()=>{
  if(foo<10){
  setFoo(foo+1);
  console.log(foo);
  }
}

const countUp2=()=>{  
  setBar(bar+1);
  setBar(n => n+1);
  console.log(bar);
}


// useCallbackを使ったカウントアップ。第二引数が変化した時に関数が実行される。まぁ上記と結果はかわらないけど、使う時出てくる。第二引数で変数入れて、その数値が変化した時に関数ないの処理を走らせるみたいな。
const countUp3 = useCallback(
  ()=>{
    setCount(count+1);
    console.log(count);   
   },
   [count]
);



return(
    <>
    <div className="flex">
      <div className="m-1">
<button className="bg-cyan-500 hover:bg-cyan-600 ... p-2" onClick={countUp}>
  ↓カウントアップ
  </button>
  <p className="text-center">{foo}</p> 
  </div>

<div className="m-1">
  <button className="bg-cyan-500 hover:bg-cyan-600 ... p-2" onClick={countUp2}> 
  ↓カウントアップ2ずつ
</button>
<p className="text-center">{bar}</p> 
</div>

<div className="m-1">
<button className="bg-cyan-500 hover:bg-cyan-600 ... p-2" onClick={countUp3}> 
↓カウントアップuseCallback使った場合
</button>
<p className="text-center">{count}</p>
</div>

</div>
</>
    );
}


