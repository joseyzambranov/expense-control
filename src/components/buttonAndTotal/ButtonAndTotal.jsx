import "../../index.css"

export default function ButtonAndTotal({inputTotal,outputTotal}){

return(
    <>
    
    <section className=".section button-plan">
    <div className="total">
        <h2>SAVED: {inputTotal-outputTotal} $</h2>
    </div>

    </section>
    </>
    
    
   
    
    

    
)

       
        
    }