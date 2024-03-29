import {useState} from "react";
import axios from 'axios';
export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
   try {
     ev.preventDefault();
    const daata = {
      username: username,
      password: password
    };
    const response = await axios.post("http://localhost:4000/api/register", daata);
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }

   } catch (error) {
     console.log(error);
     throw error;
       }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
    </form>
  );
}