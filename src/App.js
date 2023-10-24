import React,{useState} from "react";
import { FullName } from "./components/FullName";
import "./components/common.css"

function App() {
  const [empid,setEmpid]=useState("");
  const [email,setEmail]=useState("");
  const [comp,setComp]=useState("");

  return (
    <div className="main">
           <input type="number" placeholder="Enter Employe id" onChange={(e)=>setEmpid(e.target.value)}/>
            <input type="text" placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Enter Company Name" onChange={(e)=>setComp(e.target.value)} />
<FullName empid={empid} email={email} comp={comp}/>
    </div>
  );
}

export default App;
