import './App.css';
import Login from './component/Login';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter,BrowserRouter as Router,Route,Routes,useNavigate,} from "react-router-dom";
import Home from './component/Home';
import Connection from "./component/Connection";
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { authentication } from './config/Config';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleAction = (id: any) => {
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response)
          navigate("/Home")
        })
        .catch((error) => {
          console.error(error.code)
        })
    }
    if(id === 1){
      signInWithEmailAndPassword(authentication, email, password)
        .then((response)=> {
          navigate("/Home")
        })
        .catch((error) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const errorCode = error.code;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const errorMessage = error.message;
        });
    }
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login
          title="Login"
          setEmail={setEmail}
          setPassword={setPassword}
          handleAction={() => handleAction(1)}
        />} />
        <Route path="/Register" element={<Login
          title="Register"
          setEmail={setEmail}
          setPassword={setPassword}
          handleAction={() => handleAction(2)}
        />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Connection" element={<Connection/>}/>
      </Routes>
    </div>
  );
}

