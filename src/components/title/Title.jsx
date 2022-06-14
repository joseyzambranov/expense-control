import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../index.css";
import { getInputActual, getTwoFirstInputActual } from "../../redux/apiCall";
import { addInputTotal } from "../../redux/inputTotalRedux";

export default function Title(){

    /*const user = useSelector((state)=>state.user)
    const inputActual =useSelector((state)=>state.inputActual.inputs) 
    const dispatch = useDispatch()

    const handleClick=(e)=>{

        e.preventDefault()
        getTwoFirstInputActual(dispatch,user.currentUser.others._id)
        getInputActual(dispatch,user.currentUser.others._id)
        dispatch(addInputTotal(inputActual))
        
            
    }*/
    
    return(
        
        
        <section className="section-title-center section section-title">
            <Link to="/" >
                <h1>EXPENCE CONTROL</h1>
            </Link>
        </section>
        
    )
}