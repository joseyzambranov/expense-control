import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Table from './page/Table';
import Register from "./page/Register";
import { useDispatch, useSelector } from 'react-redux';
import { getInputActual, getTwoFirstInputActual } from './redux/apiCall';
import { useEffect } from 'react';
import { userNologin } from './redux/userRedux';
import InputEdit from './page/InputEdit';
import OutputEdit from './page/OutputEdit';
import ForgotPassword from "./page/ForgotPassword"
function App() {

    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.currentUser)
    
    /*useEffect(()=>{

        getInputActual(dispatch,user.other._id)
        getTwoFirstInputActual(dispatch,user.other._id)

    },[user])*/
   

return(
    
    <BrowserRouter>
    <Routes>
        <Route exact path='/expense-control'element={<Home />}></Route>
        <Route exact path='/expense-control/Table'element={<Table />}></Route>
        <Route exact path='/expense-control/Login'element={/*user?<Navigate to="/" />:*/<Login />}></Route>
        <Route exact path='/expense-control/Register'element={<Register />}></Route>
        <Route exact path="/expense-control/InputEdit/:inputId" element={<InputEdit />}></Route>
        <Route exact path="/expense-control/OutputEdit/:outputId" element={<OutputEdit />}></Route>
        <Route exact path="/expense-control/ForgotPassword" element={<ForgotPassword />}></Route>
    </Routes>    
    
    </BrowserRouter>

)
  
}

export default App;
