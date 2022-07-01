import { useEffect, useState } from "react"
//import data from "../../data.json"
import InputList from "./InputList"
//import dataoutput from "../../output.json";
import "../../index.css"
import OutputList from "./OutputList";
import ActualSpending from "./ActualSpending";
import { useDispatch, useSelector } from "react-redux";
import { addInputPlan, addInputplan, addInputTotal, addOutputplan, addOutputPlanTotal } from "../../redux/apiCall";

export default function Plan({inputTotal,outputTotal}){

    const translate = useSelector((state)=>state.user.translate) 

    const dispatch =useDispatch()

    //const user = useSelector((state)=>state.user)
    const inputPlan = useSelector((state)=>state.expensePlan.inputsPlan)
    const outputPlan =useSelector((state)=>state.expensePlan.outputPlan)


    /*useEffect(()=>{
        try{
            const inputD = {...inputPlan[0]}
            const inpu =  {data:inputD,userId:user.currentUser.others._id}
            addInputPlan(dispatch,inpu)
            console.log(inpu)
        }catch{}

        

    },[dispatch,user,inputPlan])*/


const [input,setInput]= useState(inputPlan);
const [output,setOutput]= useState(outputPlan);

const sumInput=()=>{
    var sum =0
    for(let i = 0 ;i < input.length ; i++){
       sum+=Number(input[i].amount)
    }
    return sum  
    
}

/*------------------Input total----------------------- */

const [inputTotalPlan,setInputTotal] = useState(sumInput())

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
    const inputTotal = sumInput()+Number(userAmount)
    addInputTotal(dispatch,inputTotal)
    addInputplan(dispatch,copy)
   
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
    const outputTotal= sumOutput()+Number(userOutAmount)
    addOutputplan(dispatch,copy)
    addOutputPlanTotal(dispatch,outputTotal)
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
    /*const inputTotal = sumInput()
    addInputTotal(dispatch,inputTotal)*/
    setOutputTotal(sumOutput())
    addOutputplan(dispatch,filterOut)
    addInputplan(dispatch,filter)
   /* const  outputTotal = sumOutput()
    addOutputPlanTotal(dispatch,outputTotal)*/
    
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
    try{
        e.preventDefault();
        addTask(userInput,userAmount);
        setUserInput("")
        setUserAmount("")
        setActiveContainer(false)

    }catch{}

    

  
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
 addInputTotal(dispatch,sumInput())
 addOutputPlanTotal(dispatch,sumOutput())
    
})



return(
    <>
<div className="container-plan">
<section className="section plan">
    {/*SPENDING PLAN*/}
    <div className="spending-plan">
        <div className="spending-plan-header">
            <p className="section-title-center">{translate?"MONTHLY SPENDING PLAN":"PLAN DE GASTO MENSUAL"}</p>
        </div>
        <div className="spending-plan-body">
            <InputList input={input} onChange={onChange} />
            <OutputList output={output} onChangeOut={onChangeOut}/>
        </div>
        <div className="spending-plan-body-total">
            <div className="spending-plan-item-total item-a red">
                <p>{translate?"Total Output":"Gastos Total"}</p>
                <div className="spending-plan-item-total-num white">
                    <p className="text-black">{OutputTotal} $</p>
                </div>
            </div>

            <div className="spending-plan-item-total blue">
                <p>{translate?"Total Input":"Ingreso Total"}</p>
                <div className="spending-plan-item-total-num white ">
                    <p className="text-black">{inputTotalPlan} $</p>
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
                        
                        <input onChange={handleChangeImput} 
                               className="spending-plan-item blue" 
                               value={userInput} placeholder={translate?"New Input":"Nuevo Ingreso"}  
                               type="text" />
                        
                        <div>
                            <input onChange={handleChangeAmount} 
                                   value={userAmount} 
                                   className="spending-plan-item white" 
                                   type="number" 
                                   placeholder={userAmount} />
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
                        
                            <input onChange={handleChangeOutPut} 
                                   value={userOutPut} 
                                   className="spending-plan-item red" 
                                   type="text" 
                                   placeholder={translate?"New Output":"Nuevo Gasto"} />
                        
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

<ActualSpending outputTotal={outputTotal}  inputTotal={inputTotal} />

</div>
</>
)
}