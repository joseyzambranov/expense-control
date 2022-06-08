import "../../index.css"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { logoutuser } from "../../redux/apiCall"

export default function Header(){

    const LoginLogout = styled.div`
    color: white;
    padding: 0 1rem 0 1rem;
    font-size: var(--big-font-size);
    &:disabled{
        transform: rotate(-180deg);
    }

    `
    const dispatch =useDispatch()
    const user = useSelector((state)=>state.user.currentUser)

    const handleClick =(e)=>{
        e.preventDefault()
        logoutuser(dispatch)
    }

    return(
        <header >
        <div className="container-header" >
           <div className="container-title-header">
              
               <p>Hello {user?user.others.username: "Saver"}</p>
               
               
               
           </div>
           <LoginLogout onClick={handleClick} >
           
            {user?<><i class='bx bx-log-out-circle'></i></>:<><Link className="text-white" to="/Login">
           <i class='bx bx-log-in-circle'></i>
        </Link></>
          }
           
           </LoginLogout>
           
           
           <div>
              <img className="img-header" src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" />
           </div>
            
        </div>
    </header>
        
        )
    
}