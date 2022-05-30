import { useState } from "react"

export default function InputList({input,onChange}){



    return(<>
{input.map(i=>{
            return(<>
            <div className="spending-plan-item-checkbox">
            <input 
            type="checkbox" 
            id={i.id} 
            onChange={onChange}
            checked={i.delete}
            />
            </div>

                
            
    <div className="spending-plan-item blue">
    
                    
        <p > {i.input}</p>
    </div>
    
    <div  >
        
        <span className="spending-plan-item white">{i.amount}</span>
    </div>

                
            </>)
        })}
    
    


    </>)
}

