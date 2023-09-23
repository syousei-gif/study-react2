"use client"
import { useEffect } from "react";


export function UseEfect(){
  return(
useEffect(() => {
  document.body.style.backgroundColor = "green";
  return () => {
    document.body.style.backgroundColor = "blue";
  }
  }, [])
  );
}
