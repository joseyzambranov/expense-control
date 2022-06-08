import { useEffect, useRef, useState } from "react"

import data from "../../data.json"
import InputList from "./InputList"
import dataoutput from "../../output.json";
import "../../index.css"
import OutputList from "./OutputList";
import ActualSpending from "./ActualSpending";

export default function Plan(){

const [input,setInput]= useState(data);
const [output,setOutput]= useState(dataoutput);

const sumInput=()=>{
    var sum =0
    for(let i = 0 ;i < input.length ; i++){
       sum+=Number(input[i].amount)
    }
    return sum  
    
}

/*------------------Input total----------------------- */

const [inputTotal,setInputTotal] = useState(sumInput())

const onChange=(e)=>{
    const inputDelete = input.map(i=>{
        return i.id===Number(e.currentTarget.id) ? {...i,delete:!i.delete} :{...i}
        
    })
    setInput(inputDelete)
        
}

const addTask = (userInput,userAmount) =>{
    let copy = [...input];
    copy = [...copy,{id:input.length+1,input:userInput,amount:userAmount,delete:false}];
    setInput(copy)
    setInputTotal(sumInput()+Number(userAmount))
   
}

/*----------Output total-------------- */

const sumOutput=()=>{
    var sum =0
    for(let i = 0 ;i < output.length ; i++){
       sum+=Number(output[i].amount)
    }

    return sum
    
}


const [OutputTotal,setOutputTotal] = useState(sumOutput())

const onChangeOut=(e)=>{
    const outputDelete = output.map(i=>{
        return i.id===Number(e.currentTarget.id) ? {...i,delete:!i.delete} :{...i}
        
    })
    setOutput(outputDelete)
    
    
}


const addTaskOut =(userOutPut,userOutAmount)=>{
    let copy=[...output];
    copy=[...copy,{id:output.length+1,output:userOutPut,amount:userOutAmount}];
    setOutput(copy)
    setOutputTotal(sumOutput()+Number(userOutAmount))
}


/*---------delete--------- */
const handleDelete=(e)=>{
   
    let filter = input.filter(i=>{
        return !i.delete
    })
    let filterOut = output.filter(i=>{
        return !i.delete
    })
    e.preventDefault()
    setInput(filter)
    setOutput(filterOut)
    setInputTotal(sumInput())
    setOutputTotal(sumOutput())
    
}

/*------------add input---------- */

const [userInput,setUserInput] = useState("");
const [userAmount,setUserAmount] =useState();

const handleChangeImput=(e)=>{
    setUserInput(e.currentTarget.value)
}

const handleChangeAmount=(e)=>{
    setUserAmount(e.currentTarget.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    addTask(userInput,userAmount);
    setUserInput("")
    setUserAmount("")
    setActiveContainer(false)
}

/*---------------add output------------------- */

const [userOutPut,setUserOutPut] =useState("");
const [userOutAmount,setUserOutAmount] = useState()

const handleChangeOutPut=(e)=>{
    setUserOutPut(e.currentTarget.value)
}

const handleChangeOutAmount=(e)=>{
    setUserOutAmount(e.currentTarget.value)
}

const handleSubmitOutPut=(e)=>{
    e.preventDefault();
    addTaskOut(userOutPut,userOutAmount);
    setUserOutPut("");
    setUserOutAmount("");
    setactiveContaineroutput(false);
}

/*------------Modal-------------- */
const [activeContainer,setActiveContainer]=useState(false)
const [activeContaineroutput,setactiveContaineroutput]=useState(false)


const closeModal =()=>{
    setActiveContainer(false)
}
const openModal=()=>{
    setActiveContainer(true)
}
const closeModaloutput =()=>{
    setactiveContaineroutput(false)
}
const openModaloutput=()=>{
    setactiveContaineroutput(true)
}



useEffect(()=>{
 setInputTotal(sumInput())
 setOutputTotal(sumOutput())
    
})

return(
<div className="container-plan">
<section className="section plan">
    {/*SPENDING PLAN*/}
    <div className="spending-plan">
        <div className="spending-plan-header">
            <p className="section-title-center">SPENDING PLAN <i className='bx bx-chevron-down'></i></p>
        </div>
        <div className="spending-plan-body">
            <InputList input={input} onChange={onChange} />
            <OutputList output={output} onChangeOut={onChangeOut}/>
        </div>
        <div className="spending-plan-body-total">
            <div className="spending-plan-item-total item-a red">
                <p>total gastos</p>
                <div className="spending-plan-item-total-num white">
                    <p className="text-black">{OutputTotal} $</p>
                </div>
            </div>

            <div className="spending-plan-item-total blue">
                <p>total entradas</p>
                <div className="spending-plan-item-total-num white ">
                    <p className="text-black">{inputTotal} $</p>
                </div>
            </div>

        </div>
        <div className="spending-plan-button-container">

        <div onClick={handleDelete} className="spending-plan-button white">
            <i className='bx bx-trash  text-black'></i>
            </div>
            <div onClick={openModal} className="spending-plan-button blue ">
                <i className='bx bx-plus'></i>
            </div>
           
            <div  className={`modal ${activeContainer?"modal-active":""}`}>
                {/*--MODAL--*/}
                <form className="spending-plan" onSubmit={handleSubmit}>

                    <div onClick={closeModal} className="modal-close ">
                        <i className='bx bx-x text-white'></i>
                    </div>

                    <div className="modal-body">
                        
                        <input onChange={handleChangeImput} className="spending-plan-item blue" value={userInput} placeholder="New Input"  type="text" />
                        
                        <div>
                            <input onChange={handleChangeAmount} value={userAmount} className="spending-plan-item white" type="number" placeholder={userAmount} />
                        </div>
                       
                       

                    </div>
                    
                    <div className="spending-plan-button-container">
                        <button className="  spending-plan-button blue">
                        
                        <i className='bx bx-plus'></i>
                        
                            
                    </button>

                        </div>

                </form>


            </div>

            <div onClick={openModaloutput} className="spending-plan-button red">
                <i className='bx bx-minus'></i>
            </div>
            <div className={`modal ${activeContaineroutput?"modal-active":""}`}>
                {/*--MODAL--*/}
                <div className="spending-plan">

                    <div onClick={closeModaloutput} className="modal-close close_modal">
                        <i className='bx bx-x text-white'></i>
                    </div>

                    <div className="modal-body">
                        
                            <input onChange={handleChangeOutPut} value={userOutPut} className="spending-plan-item red" type="text" placeholder="New Output" />
                        
                        <div>
                            <input onChange={handleChangeOutAmount} value={userOutAmount} className="spending-plan-item white" type="number" placeholder={userOutAmount} />
                        </div>

                    </div>

                    <div className="spending-plan-button-container">
                        <button onClick={handleSubmitOutPut} className=" spending-plan-button red">
                            <i className='bx bx-minus'></i>
                        </button>

                    </div>

                </div>


            </div>
        </div>

    </div>
</section>
<ActualSpending>

</ActualSpending>

</div>
)
}