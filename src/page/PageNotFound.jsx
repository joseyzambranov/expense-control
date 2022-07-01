import React from 'react';
import { useSelector } from "react-redux"

export default function PageNotFound(){

    const translate = useSelector((state)=>state.user.translate) 

    return(
        <>
                
        <div>
        <h2 className='text-black'>404 Error</h2>
        <h3>Page Not Found</h3>
    </div>

<div>

<a href="https://joseyzambranov.github.io/expense-control/" className="text-black">{translate?"Back":"Volver"} </a>


</div>
        
</>

    )
    
}
  
