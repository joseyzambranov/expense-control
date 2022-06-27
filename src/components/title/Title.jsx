import { Link } from "react-router-dom";
import "../../index.css";

export default function Title(){
        
    return(
        
        
        <section className="section-title-center section section-title">
            <Link to="/expense-control" >
                <h1>EXPENCE CONTROL</h1>
            </Link>
        </section>
        
    )
}