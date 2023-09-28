import React from 'react';
import './App.css';
import { FormLogIn } from "./components/FormLogIn";
import {CardUI} from "./components/CardUI"
import {CardPassword} from "./components/CardPassword"
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<FormLogIn />} />
        <Route  path='/card' element={<CardUI />} />
        <Route  path='/cardPassword' element={<CardPassword />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
