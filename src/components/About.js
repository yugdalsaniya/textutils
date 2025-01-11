import React from 'react'

export default function About(props) {


  //  const [myStyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  //   })

let myStyle ={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
  border:'1px solid',
  borderColor:props.mode==='dark'?'white':'#042743',
}


    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle=() => {
    //   if(myStyle.color==='black'){
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:'black' ,
    //         border: '1px solid white'

    //     })
    //     setBtnText("Enable Light Mode")
    //   }
    //   else{
    //     setMyStyle({
    //       color:'black',
    //       backgroundColor:'white'  
    //   })
    //   setBtnText("Enable Dark Mode")
    //   }
    // }
    
  
  return (


    <div className='container' >
      <h1 className='my-3'style={{color:props.mode==='dark'?'white':'#042743'}} >About Us</h1>
            <div className="accordion" id="accordionExample"  >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Analyze Your Text</strong> 
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or and time count. 
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free To Use</strong> 
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
          TextUtil is a free-to-use web tool that offers precise word and character counting along with advanced text analysis features. Effortlessly evaluate your content with instant results and enhance your writing process. Perfect for writers, editors, and anyone needing quick text insights.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong> 
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
          Browser compatibility ensures your website functions seamlessly across different web browsers. By addressing compatibility issues, you guarantee that all users, regardless of their browser choice, have a consistent and optimized experience. This practice is essential for reaching a wider audience and maintaining a professional online presence.
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary my-2" >{btntext}</button>
    </div> */}
    </div>

  )
}
