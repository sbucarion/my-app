import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      <BrowserRouter>
       <Routes>
        {/* Home is for landing page of unauth users */}
         <Route path="/" element={<Home/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
