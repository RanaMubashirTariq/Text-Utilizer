import React,{useState} from 'react'

export default function Textform(props) {
    const  HandleUpperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted To Upper Case","success");
    }
    const  HandleLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted To Lower Case","success");
    }
    const  HandleRemove = () =>{
        let newText = ' ';
        setText(newText);
        props.showAlert("Text Box is empty","success");
    }
    const  HandleCopy = () =>{
        // let text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert(" Text Copied","success");
    }
    const HandleOnChange = (event) =>{
        setText(event.target.value);
    }
       const HandleExtraSpace = () =>{
        let newText = text.split(/[ ]+ /);
        setText(newText.join(' '));
       }
    const [text,setText] = useState('');
  return (
    <>
    <div className='container-1 d-flex justify-content-between' style={{color : props.mode =='dark'?'white':'black'}}>
        <h1>Text Analyzir</h1>
        <p className='a mt-3'><b>{text.split(/\s+/).filter((element) =>{return (element.length!==0) }).length}</b> Words <b>{text.length}</b> Character <b>{text.split(".").length-1}</b> Sentence</p>
    </div>
      <textarea className="form-control" id="myBox" rows={8}  value={text} onChange={HandleOnChange} style={{backgroundColor : props.mode=='dark'?'grey':'white', color : props.mode=='dark'?'white':'black',}}/>
        <div className='container' >
               <button className="btn btn-dark mx-3  my-3" onClick={() =>HandleUpperCase(props.toggleMode)}>Click ToUpperCase</button>
               <button className="btn btn-dark mx-3  my-3" onClick={() =>HandleLowerCase(props.toggleMode)}>Click-ToLowerCase</button>
               <button className="btn btn-dark mx-3  my-3" onClick={() =>HandleRemove(props.toggleMode)}>Remove-Text</button>
               <button className="btn btn-dark mx-3 my-3"  onClick={() =>HandleExtraSpace(props.toggleMode)}>Remove-ExtraSpace</button>
               <button className="btn btn-dark" onClick={() =>HandleCopy(props.toggleMode)}>Copy</button>
        </div>
  </>
  
  )
}
