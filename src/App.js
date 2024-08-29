import './App.css';
import Bang from './Yaki/Bang';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
// import About from './components/About';
// import { useState } from 'react';
// import Alert from './components/Alert';
// import Front from './components/Front.js'
// import User from './components/User';
// import{
//   BrowserRouter,
//   RouterProvider, 
//   Switch,
//   Route,
//   Link,
//   Routes,
//   Navigate,
// } from 'react-router-dom';
// import User1 from './components/User1';
function App() {

  // const [mode,setMode] = useState('light');
  // const [alert,setAlert] = useState(null);
  // const showAlert =(massage,type)=>{
  //   setAlert({
  //     massage : massage,
  //     type : type,
  //   })
  //   setTimeout(() =>{
  //     setAlert(null);
  //   } ,2000);
  // }
  // const removeClasses = () =>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-info')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  // }
  // const toggleMode = (cls) => {

  //   removeClasses();
  //   document.body.classList.add('bg-' + cls)
    // if(mode === 'light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor ='#042743';
    //   showAlert("Enable Dark Mode","success");
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor ='white';
    //   showAlert("Disabled Dark Mode","Success");
    // }
  return (
    <>
    <Bang/>
      {/*
      <Navbar mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
    <div className="container">
               <Routes>
                    <Route exect path='/about' element={ <About/>}/>
                          <Route  exect path='/' element={<Front/>}/>
                    <Route exect path='/home' element={<Textform mode={mode} showAlert={showAlert} oggleMode={toggleMode}/>}/>
                      <Route path='/contact' element={<Navigate to='/'/>}/> 
                      <Route path='/User1/:name' element={<User1/>}/>
               </Routes>
               
   
               
      {/* <About/> */}
    
    </>
  );
}

export default App;
