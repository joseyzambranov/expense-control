import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Title(){

    const translate = useSelector((state)=>state.user.translate) 
        
    return(
        
        
        <section className="section-title-center section section-title">
            
                <h1><Link to="/expense-control" >{translate?"EXPENCE CONTROL":"CONTROL DE GASTO"}</Link></h1>
            
        </section>
        
    )
}