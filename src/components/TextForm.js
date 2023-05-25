import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Click on Uppercase Button" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleRePunc = ()=>{
        let newStr = /[.,/#!$%^&*;:{}=-_`~()]/;

        let newText = text.replace(newStr,'')
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    return (
        <div className="container" style ={{color:props.mode === 'dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style = {  {backgroundColor:props.mode==='light'?'white':'#21476e',color:props.mode === 'dark'?'white':'black'}} rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <div className="btn btn-primary mx-3" onClick={handleRePunc}>Convert to Remove Puctuation</div>
            <div className="container">
                <h1>Your Text summary</h1>
                <p><b>{text.split(' ').length}</b> words and Characters are <b>{text.length}</b></p>
                <p>{0.008 * text.length}</p>
                <h3>Privew of Inputs</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
