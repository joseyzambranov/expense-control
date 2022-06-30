import { useSelector } from "react-redux"
import "../../index.css"

export default function ButtonAndTotal({inputTotal,outputTotal}){

    const translate = useSelector((state)=>state.user.translate) 

    const inputPlanTotal = useSelector((state)=>state.expensePlan.inputPlanTotal)
    const outputPlanTotal = useSelector((state)=>state.expensePlan.outputPlanTotal)

    const totalPlan = inputPlanTotal-outputPlanTotal
    const totalSave = inputTotal-outputTotal

return(
    <>

   <section className=".section button-plan">
    <div className="total">
        <h2 >PLAN: <span className={`${totalPlan>0?"text-blue":"text-red"}`}> {totalPlan}</span> $</h2>
    </div>

    <div className="total">
        <h2>{translate?'SAVED':"AHORRO"}: <span className={`${totalSave>=totalPlan?"text-blue":"text-red"}`}> {totalSave}</span> $</h2>
    </div>


    </section>
    
   
    </>
    
    
   
    
    

    
)

       
        
    }