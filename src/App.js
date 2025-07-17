import logo from './logo.svg';
import './App.css';
import Internalmarks from './components/Internalmarks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Viewall from './components/Viewall';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/add' element={<Internalmarks/>}/>
        <Route path='/view' element={<Viewall/>}/>
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
