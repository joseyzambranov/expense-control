import "../../index.css"
import {Link} from "react-router-dom"

export default function Header(){

    

    return(
        <header >
        <div className="container-header" >
           <div className="container-title-header">
               <Link to="/Login">
               <p>Hello User</p>
               </Link>
               
           </div>
           <div>
              <img className="img-header" src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" />
           </div>
            
        </div>
    </header>
        
        )
    
}