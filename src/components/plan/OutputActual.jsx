export default function OutputActul({output}){
    return(
     <>
     {output.map(i=>{
         return(
             <>
                 <div className="spending-plan-item red">
                     <p>{i.output}</p>
                 </div>
                 <div>
                     <span className="spending-plan-item white" >{i.price}</span>
                 </div>
             </>
 
         )
     })}
     
     </> )
 }