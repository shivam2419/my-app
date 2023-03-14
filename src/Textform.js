import React,{useState} from 'react'

export default function Textform(props) {
    // // For making a dark mmode button ....
    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor:"white",
    //     padding: "2px",
    //     margin:"10px"
    // })
    // const [btntext,setbtntext] = useState('Dark Mode')
    // const changecolor=()=>
    // {
    //     if (myStyle.color=="white")
    //     {
    //         setmyStyle(
    //             {
    //                 color: "black",
    //                 backgroundColor:"white",
    //                 padding: "2px",
    //                 margin:"10px"
                
    //             }
    //         )
    //         setbtntext('Dark Mode')
    //     }
    //     else
    //     {
    //         setmyStyle(
    //             {
    //                 color: "white",
    //                 backgroundColor:"black",
    //                 padding: "2px",
    //                 margin:"10px"
                
    //             }
    //         )
    //         setbtntext('Light Mode')
    //     }
    // }
// Button system over .....

    const upfunc=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);  
        props.func("UpperCase done","success") ;

    }
    const clear=()=>{
        let clrtxt="";
        setText(clrtxt)
        props.func("Textarea cleaned","success") ;
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText]= useState('');
  return (
    <>
    <div className={`container text-${props.modes==='dark' ? 'light' : 'dark'}`}>
        <div className='container'>
            <div>
                <h1 className='my-5'>{props.ftitle} </h1>
                
                <textarea id="mybox" className="form-control " value={text} onChange={handleOnChange} rows="10" placeholder='Enter text here'></textarea>
            </div>
            <br />
            <button className=" btn btn-info mx-1" onClick={upfunc} >Convert to upper case</button>
        
            <button className=" btn btn-danger mx-1" onClick={clear}>Clear the textarea </button>

            {/* <button type="button" className='btn btn-light mx-1' onClick={changecolor}>{btntext}</button> */}
        </div>
        <div className="container my-5">
            <h1>Text Summary</h1>
            <p>
                {text.split(" ").length-1} Words , {text.length} characters
                <br />
                Reading time :- {text.split(" ").length*0.008} minutes
            </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
    </>
  )
}

