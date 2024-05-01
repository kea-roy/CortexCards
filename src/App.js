import './App.css';
import React, { useState } from 'react';
import WelcomePage from './pages/welcome.tsx';
import Dashboard from './pages/dashboard.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="headerAndBody">
          <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
          <Route path="/" element={<WelcomePage user={user} setUser={setUser}/>} />
        </Routes>
        </div>
        <Footer user={user} setUser={setUser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
