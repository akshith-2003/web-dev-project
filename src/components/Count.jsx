import React from 'react'
import { useState} from "react";
import "./Count.css"
import CountValueAtom from '../recoil/CountValueAtom';
import {useRecoilState} from 'recoil';
const Count = () => {
    const [countvalue,setCountvalue] = useRecoilState(CountValueAtom);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json));
    //   },[countvalue])
  return (
    <div><h1>COUNTER</h1>
      <h2>{countvalue}</h2>
      <div className="btn">
      <button onClick = {() => setCountvalue(countvalue+1)}>Increament</button>
      <button onClick = {() => setCountvalue(countvalue-1)}>Decreament</button>
      </div> 
      </div>
  )
}

export default Count