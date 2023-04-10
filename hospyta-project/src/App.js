import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Nav from './component/Nav';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
          <Route exact path='/' element={<Home></Home>} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


