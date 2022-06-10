export default function InputActul({input}){
   return(
    <>
       {input.map(i=>{
        return(
            <>
                <div className="spending-plan-item blue">
                    <p>{i.input}</p>
                </div>
                <div>
                    <span className="spending-plan-item white" >{i.price}</span>
                </div>
            </>

        )
    })}
    </>
    
    
     )
}