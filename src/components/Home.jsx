import React from 'react'
import "./home.css"
import {Link} from "react-router-dom";
import {useRecoilState} from 'recoil';
import CountValueAtom from '../recoil/CountValueAtom';
const Home = () => {
    const [countvalue,setCountvalue] = useRecoilState(CountValueAtom);

  return (
    <div><h1>Home</h1>
    <div><h1>Count value is:{countvalue}</h1></div>
    <div className='link-wrapper'>
       <div> <Link to="/Counter"> Counter</Link></div>
       
    <div><Link to="/Shopping">Shopping</Link></div>
    </div>
    </div>
  )
}

export default Home