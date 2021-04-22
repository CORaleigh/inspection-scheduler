import React, { useState } from 'react';
import './App.css';
import { Shell } from './components/Shell';
import {msalInstance } from './msal';

function App() {
  const [inspector, setInspector] = useState<string>()
  const handleMsalRequest = () => {
    const accounts = msalInstance.getAllAccounts();
    let name = '';
    if (accounts.length === 0) {
      msalInstance.loginRedirect();
    } else if (accounts.length > 1) {
      // Add choose account code here
    } else if (accounts.length === 1) {
      name = accounts[0].name?.split(',').reverse().join(' ').trimStart() as string;
      setInspector(name);
    }
  }
  
  window.addEventListener('load', () => {
    msalInstance.handleRedirectPromise().then(handleMsalRequest);
  });

  return (
    <div className="App">
      {inspector && <Shell inspector={inspector}/>}
    </div>
  );
}

export default App;
