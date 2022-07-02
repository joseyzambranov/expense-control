import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Table from './page/Table';
import Register from "./page/Register";
import InputEdit from './page/InputEdit';
import OutputEdit from './page/OutputEdit';
import ForgotPassword from "./page/ForgotPassword"
import { HashRouter,Route, Routes } from "react-router-dom";
function App() {

return(
    <>
    
<HashRouter basename='/'>

        <Routes>
            <Route exact path='/'element={<Home />}></Route>
            <Route exact path='/Login'element={<Login />}></Route>
            <Route exact path='/Register'element={<Register />}></Route>
            <Route exact path='/Table'element={<Table />}></Route>
            <Route exact path="/InputEdit/:inputId" element={<InputEdit />}></Route>
            <Route exact path="/OutputEdit/:outputId" element={<OutputEdit />}></Route>
            <Route exact path="/ForgotPassword" element={<ForgotPassword />}></Route>
        </Routes>    

</HashRouter>
      
    </>
    

)
  
}

export default App;
