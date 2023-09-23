"use client"
import React, {useCallback, useState} from 'react';

export function String(){
const [text, setText] = useState("")
const [isShow, setIsShow] = useState(false)

const textChange =useCallback((e)=>{
  if(e.target.value.length > 5){
    alert("5文字以内で入力してください。")
    return;
  }
// trimは空白を入力させないやつ
setText(e.target.value.trim());
},[]);


// isShowがtrueならfalseにして、falseならtrueにする関数。ボタンが押されると実行される。
const display = ()=>{
if(isShow){
  setIsShow(false)
  return;
}else{
  setIsShow(true)
  return;
}
};


return(
    <>
    <p>5文字以内で入力。超えるとアラート。useCallback関数使って実装してる。</p>
 <input 
 type="text" 
 value={text}
 onChange={textChange}
 />



{/* ボタンを押すと、表示された！という文字が出てくる。ボタンは、isShowがtrueなら非表示、falseなら表示というボタンになる。true,falseの切り替えはdisplay関数で行っている。 */}
{isShow ? <p>表示された！</p> : null}
<button className="bg-cyan-500 hover:bg-cyan-600 ... p-2" onClick={display}>{isShow? <p>非表示</p> :<p>表示</p>}</button>




    </>
    );    
}