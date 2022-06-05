import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Table from './page/Table';
import Register from "./page/Register";
function App() {


return(
    
    <BrowserRouter>
    <Routes>
        <Route exact path='/'element={<Home />}></Route>
        <Route exact path='/Table'element={<Table />}></Route>
        <Route exact path='/Login'element={<Login />}></Route>
        <Route exact path='/Register'element={<Register />}></Route>
    </Routes>    
    
    </BrowserRouter>

)
  
}

export default App;
