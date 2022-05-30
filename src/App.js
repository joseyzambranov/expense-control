import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Table from './page/Table';
function App() {


return(
    
    <BrowserRouter>
    <Routes>
        <Route exact path='/'element={<Home />}></Route>
        <Route exact path='/Table'element={<Table />}></Route>
    </Routes>    
    
    </BrowserRouter>

)
  
}

export default App;
