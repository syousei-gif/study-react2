"use client"
export function Button(props) {
  return (
//  <button  onClick={()=> alert(props.sentence)}>ボタン</button>   



<button className="bg-cyan-500 hover:bg-cyan-600 ... p-2"  onClick={props.onClick}>ボタンアラート</button>   

  );
}