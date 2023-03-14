import { useState } from "react";
import "./App.css";
import Nav from "./Navbar.js";
import  Textform from "./Textform.js";
import Alert from "./Alert";
// import About from "./About";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const [mode,setmode]=useState("light")
  //for alert...
  const [txt,settxt]=useState(null)
  const func=(msg,type)=>
  {
    settxt(
      {
        msg:msg,
        type:type
      }
    );
    setTimeout(() => {
      settxt(null);
    }, 800);
  }

  //toggle function for dark mode....
  const togglemode=()=>
  {
    if (mode==="light")
    {
      setmode("dark");
      document.body.style.backgroundColor="#0000A0";
      func("Dark Mode","success");
      document.title="TextUtils - Dark Mode";
      setInterval(() => {
        document.title="TextUtils - Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title="Install my application";
      }, 1500);
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      func("Light Mode","success");
      document.title="TextUtils - Light Mode";
      setInterval(() => {
        document.title="TextUtils - Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title="Install my application";
      }, 1500);
    }
  }

  // //second toggle
  // const togglemode1=()=>
  // {
  //   if (mode==="light")
  //   {
  //     setmode("dark");
  //     document.body.style.backgroundColor="pink";
  //     func("Dark Mode","success");
  //     document.title="TextUtils - Dark Mode";
  //     setInterval(() => {
  //       document.title="TextUtils - Dark Mode";
  //     }, 2000);
  //     setInterval(() => {
  //       document.title="Install my application";
  //     }, 1500);
  //   }
  //   else{
  //     setmode("light");
  //     document.body.style.backgroundColor="white";
  //     func("Light Mode","success");
  //     document.title="TextUtils - Light Mode";
  //     setInterval(() => {
  //       document.title="TextUtils - Dark Mode";
  //     }, 2000);
  //     setInterval(() => {
  //       document.title="Install my application";
  //     }, 1500);
  //   }
  // }

  // //third toggle...
  // const togglemode2=()=>
  // {
  //   if (mode==="light")
  //   {
  //     setmode("dark");
  //     document.body.style.backgroundColor="yellow";
  //     func("Dark Mode","success");
  //     document.title="TextUtils - Dark Mode";
  //     setInterval(() => {
  //       document.title="TextUtils - Dark Mode";
  //     }, 2000);
  //     setInterval(() => {
  //       document.title="Install my application";
  //     }, 1500);
  //   }
  //   else{
  //     setmode("light");
  //     document.body.style.backgroundColor="white";
  //     func("Light Mode","success");
  //     document.title="TextUtils - Light Mode";
  //     setInterval(() => {
  //       document.title="TextUtils - Dark Mode";
  //     }, 2000);
  //     setInterval(() => {
  //       document.title="Install my application";
  //     }, 1500);
  //   }
  // }
  
  return (
    <>
    <Nav title="TextHUB" home="Home" about="About" modes={mode} toggle={togglemode} /*toggle1={togglemode1} toggle2={togglemode2}*/ />
    <Alert txt={txt}></Alert>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={ */
    }

    <Textform func={func} ftitle="Enter the text to analyze" modes={mode}/>
    
    {/*      }> */}
           {/* <Route path="About" element={<About/>} />
         </Route>
       </Routes>
     </BrowserRouter> */}
    
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
