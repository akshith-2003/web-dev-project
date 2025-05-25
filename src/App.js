import { useState } from "react";
import Count from "./components/Count";
import Shopping from "./components/Shopping";
import SampleComponents from "./components/SampleComponents";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [sampleData,setSampleData]=useState(69);
    return (
    <div className="main-wrapper">
      {/* <Count /> */}
      {/* <Shopping/> */}
      {/* <h1>Sample Data is:{sampleData}</h1>
      <SampleComponents data={sampleData}/> */}

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Counter" element={<Count/>}/>
        <Route path="/Shopping" element={<Shopping/>}/>

      </Routes>
    </div>
  );
}

export default App;
