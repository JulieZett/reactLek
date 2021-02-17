import './App.css';
import React, { useState } from 'react';
import LogginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "Admin@admin.com",
    passord: "123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  

  if (details.email == adminUser.email && details.passord == adminUser.passord){
    console.log("logget inn");
    setUser({
      name: details.name,
      email: details.email
    });
  } else {
    console.log("detaljer stemmer ikke")
    setError("detaljer stemmer ikke");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }
 
  return (
    <div className="App">
      <h2>K</h2>
    {(user.email != "") ? (
      <div classname="welcome">
        <h2>Velkommen, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logg ut</button>
      </div>
    ) : (
      <LogginForm Login={Login} error={error}/>
    )}
    </div>
  );
}


export default App;
