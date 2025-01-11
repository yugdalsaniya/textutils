import React, { useState } from 'react'



export default function Textform(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert(" Connverted to Uppercase","success");
  }

  const handlelowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert(" Connverted to Lowercase","success");

  }

  const handleclearClick = () => {
    let newText = ''
    setText(newText);
    props.showAlert(" All Texts are cleard successfully","success");

  }



  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);

  }


  const [text, setText] = useState(' ');
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick} >Convert to uppercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowerClick} >Convert to Lowercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick} >Clear all text </button>


      </div>

      <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#042740' : 'white',color:props.mode==='dark'?'white':'#042743' }} >
        <h2>Your Text summary </h2>
        <p> {text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>  {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length}Minutes reads</p>
        <h2>Prieview</h2>
        <p>{text.length>0 ? text:"Nothing to preview!"}</p>

      </div>

    </>
  )
}

