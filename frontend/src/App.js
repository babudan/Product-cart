import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/add-user" element={<Signup />} />
          <Route path="/login-user" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
