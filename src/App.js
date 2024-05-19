import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "Black";
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Shopie" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textarea showAlert={showAlert} heading="Enter your Text" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
