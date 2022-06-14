import { useDispatch } from "react-redux";
import { userNologin } from "./redux/userRedux";

export default function authHeader() {

    


    const user = JSON.parse(localStorage.getItem("persist:root"));
    if(user===undefined){
        return ""
    }
    if (user && user.user) {

        const currentUser = JSON.parse(user.user)
        
    
      if(currentUser.currentUser===null){
            return ""
      }else{
        return currentUser.currentUser.accessToken
      }
    } else {
      return "";
    }
  }

    
  
