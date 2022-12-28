import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/navbar';
import { Banner } from './component/banner';
import { Skill } from './component/skill';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
    </div>
  );
}

export default App;
