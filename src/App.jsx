import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';
import InputField from './components/InputField';
import { useState } from 'react';
import Button2 from './components/Button2';
import { useEffect } from "react";
import CreateEmployee from './pages/CreateEmployee';


function App() {
  const [userName,setUserName]= useState('user_name');
  const [displayName,setTextField]=useState('')
  const [flag,setFlag]=useState(0)

  const onUserNameChange=(value)=> {
    setUserName(value);
  };

  const changeFlag=()=>{
    setFlag(1);
  }

  const clearUserName=()=>
  {
    setUserName("");
  }

  useEffect(() => {
      setUserName("user_name");
  },[]); 



  const copyUserName=()=>{
    setTextField(userName);
    changeFlag();
    
  }

  useEffect(() => {
    if(flag===1){
      clearUserName();
    }
    
  },[flag]); 

  return (
    <div className="App">
      <Button label="Click Me" handleClick={() => console.log('clicked')} />
      <Button2 label="Copy UserName" handleClick={() => copyUserName()} />
      {/* <InputField label="User Name" onChange={(value)=> console.log(value)}/> */}
      <InputField default_val={userName}  label="User Name" onChange={onUserNameChange} />
      {/* <TextField text={userName}/> */}
      <TextField text={displayName}/>
      <CreateEmployee/>
    </div>
  );

}

export default App;
