import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "../../index.css"
import { privateRequest } from "../../requestMethods"

export default function ButtonAndTotal(){

    const user =useSelector((state)=>state.user)

  
    
    useEffect(()=>{
        const getInput = async()=>{
            try{
                const res =await privateRequest.get("input/find/"+user.currentUser.others._id)
                const sumInput = res.data.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
                setInputTotal(sumInput)
                
            }catch{}
        }
        getInput()
        
        
    },[user,])
    
    const [inputTotal,setInputTotal]=useState(0)

    
        useEffect(()=>{
            const getOutput = async()=>{
                try{
                    const res =await privateRequest.get("output/find/"+user.currentUser.others._id)
                    const sumOutput = res.data.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
                    setOutputTotal(sumOutput)
                    
                }catch{}
            }
            getOutput()
            
            
        },[user,])
        
        const [outputTotal,setOutputTotal]=useState(0)

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