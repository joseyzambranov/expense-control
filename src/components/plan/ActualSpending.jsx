import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {privateRequest } from "../../requestMethods"
import InputActul from "./InputActual"
import OutputActual from "./OutputActual"
import InputActualTotal from "./InputActualTotal"
import OutputActualTotal from "./OutputActualTotal"
import { addInputActual, getInputActual, getTwoFirstInputActual } from "../../redux/apiCall"
import { addInputTotal } from "../../redux/inputTotalRedux"

export default function ActualSpending({inputTotal,outputTotal}){

    const dispatch =useDispatch()
    const user =useSelector((state)=>state.user)
    const inputActual = useSelector((state)=>state.inputActual.inputs)
   // const inputTotal = useSelector((state)=>state.inputTotal.total)

            /*-----------------GET TWO FIRST INPUT -----------------------*/

    const twoFirstInput= useSelector((state)=>state.inputActual.twoFirstInputs)
        
   /* useEffect(()=>{
            
        try{

            getInputActual(dispatch,user.currentUser.others._id)
            dispatch(addInputTotal(inputActual))
            getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            //addInputTotal(dispatch)
    
        }catch{}
            
    },[dispatch,user,inputActual])    */

    /*----------------------------ACTIVE AND DESACTIVE MODAL--------------------------------- */
    
    const [inputBigButtom,setInputBigButtom]=useState(false)
    const [outputBigButtom,setOutputBigButtom]=useState(false)

    const [addInput,setAddInput]=useState({})

    const closeModalOutputBig=()=>{
        setOutputBigButtom(false)
    }
    
    const openModalOutputBig=()=>{
        setOutputBigButtom(true)
    }
    
    const openModalInputBig=()=>{
        setInputBigButtom(true)
    }
    
    const closeModalInputBig=()=>{
        setInputBigButtom(false)
    }

 /*-----------------GET TWO FIRST OUTPUT -----------------------*/
    const [output,setOutput]=useState([])
    
    useEffect(()=>{

    const getUserOutput = async ()=>{
            
            
            try{
                const res = await privateRequest.get("output/start/"+user.currentUser.others._id)
                setOutput(res.data)
                    
            }catch{}
            
        }
    getUserOutput()

    },[user])

        /*------------------------ADD INPUT ACTUAL---------------------------- */

        const handleChange=(e)=>{
            e.preventDefault()
            setAddInput(prev=>{
                return{...prev,[e.target.name]:e.target.value}
            })
    
        }
        const handleClick=(e)=>{
            e.preventDefault()
            
        
       try{
            const inpu =  {...addInput,userId:user.currentUser.others._id}
            addInputActual(dispatch,inpu)
            getTwoFirstInputActual(dispatch,user.currentUser.others._id)
           // getInputActual(dispatch,user.currentUser.others._id)
            dispatch(addInputTotal(inpu))
            //addInputTotal(dispatch)
            
      }catch{}
            
             getTwoFirstInputActual(dispatch,user.currentUser.others._id)
             dispatch(addInputTotal(inputActual))
             //addInputTotal(dispatch)
             setInputBigButtom(false) 

    }

    //console.log(inputTotal)
    
    return(
        <>
        <section className="section plan">
    {/*--ACTUAL SPENDING--*/}
    <div className="actual-spending">
        <div className="spending-plan-header">
            <p className="section-title-center">ACTUAL SPENDING <i className='bx bx-chevron-down'></i></p>
        </div>

        <div className="spending-plan-body-total">
          {<InputActul input={twoFirstInput} />}

          <OutputActual output={output} />
        <div>

            </div>
            <Link to="/table">
            <div className="spending-plan-item-list">
                <a><i className='bx bx-spreadsheet'></i></a>
            </div>
            </Link>

          

            
            <OutputActualTotal outputTotal={outputTotal}/>
            <InputActualTotal inputTotal={inputTotal}/>

        </div>
        <div className="container-actual-button">
            
                <button onClick={openModalInputBig} className="actual-spending-button blue text-white button_modal">input <i className='bx bx-plus'></i></button>
                <div className={`modal ${inputBigButtom?"modal-active":""}`}>
                    {/*--MODAL--*/}
                    <form className="spending-plan" onSubmit={handleClick}>
        
                        <div onClick={closeModalInputBig} className="modal-close close_modal" >
                            <i className='bx bx-x text-white'></i>
                        </div>
        
                        <div className="modal-body">
                            <input className="spending-plan-item blue" 
                                   onChange={handleChange}
                                   name="input"
                                   placeholder="New Input"
                                   type="text"
                            />
                            
                            <div >
                            <input type="number"
                                   name="price"
                                   className="spending-plan-item white"
                                   onChange={handleChange}
                                    />
                            </div>
        
                        </div>
                        {/*<div>
                            <p className="text-black section-title-center">or</p>
                        </div>
                        <div className="modal-body">   
                            <div className="spending-plan-item blue">
                                <p  >select input <i className='bx bx-chevron-down'></i></p>
                            </div>
                            
                            <div >
                                <input className="spending-plan-item white" type="number" />
                            </div>
                        </div>*/}
                            <div className="modal-button-container">
                                <button className="actual-spending-button blue text-white ">input <i className='bx bx-plus'></i></button>
                            </div>
        
                    </form>
        
        
                </div>
            
                <button onClick={openModalOutputBig} className="actual-spending-button red text-white button_modal">output <i className='bx bx-minus'></i></button>
                <div className={`modal ${outputBigButtom?"modal-active":""}`}>
                    {/*--MODAL--*/}
                    <div className="spending-plan">
        
                        <div onClick={closeModalOutputBig} className="modal-close close_modal" >
                            <i className='bx bx-x text-white'></i>
                        </div>
        
                        <div className="modal-body">
                            <div className="spending-plan-item red">
                                <p >new output</p>
                            </div>
                            <div >
                                <input className="spending-plan-item white" type="number" />
                            </div>
        
                        </div>
                        <div>
                            <p className="text-black section-title-center">or</p>
                        </div>
                        <div className="modal-body">   
                            <div className="spending-plan-item red">
                                <p  >select output <i className='bx bx-chevron-down'></i></p>
                            </div>
                            
                            <div >
                                <input className="spending-plan-item white" type="number" />
                            </div>
                        </div>
                            <div className="modal-button-container">
                                <button className="actual-spending-button red text-white ">output <i className='bx bx-minus'></i></button>
                            </div>
        
                    </div>
        
        
                </div>

        </div>

    </div>

        </section>

        </>

    )
}