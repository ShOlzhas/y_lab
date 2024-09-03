import { useState } from "react"
import axios from "axios"

function App() {
  const [value, setValue] = useState({mail: '',password:''})
  const handleFormSubmit =(event)=>{
    event.preventDefault()
    console.log(value)
    createBook(value)
    
  }
  const onChange=({target})=>{
    setValue({...value, [target.name]:target.value});
  }
 
  const createBook = async (value)=>{
      await axios.post('http://localhost:3001/users', {value})
      
  }
  

    


  return (
   <form className="form "onSubmit={handleFormSubmit}>
    <input className="input" type="email" name="mail" value={value.mail} onChange={onChange} placeholder="Почта" required/>
    <input className="input" type="password" name="password" value={value.password} onChange={onChange} placeholder="Пароль" required/>
    <button className="button">Отправить</button>
   </form>
  );
}


export default App;
