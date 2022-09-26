import './App.css';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MarketPlace from './pages/MarketPlace';

function App() {
  return (
    <div className="App">
      
      <SideBar/>      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/marketplace' element={<MarketPlace/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
