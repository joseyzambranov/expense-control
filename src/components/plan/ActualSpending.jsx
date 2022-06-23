import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {privateRequest } from "../../requestMethods"
import InputActul from "./InputActual"
import OutputActual from "./OutputActual"
import InputActualTotal from "./InputActualTotal"
import OutputActualTotal from "./OutputActualTotal"
import { addInputActual, addOutputActual, getInputActual, getOutputActual, getTwoFirstInputActual, getTwoFirstOutputActuaL } from "../../redux/apiCall"
import ButtonAndTotal from "../buttonAndTotal/ButtonAndTotal"

export default function ActualSpending({inputTotal,outputTotal}){

    const dispatch =useDispatch()
    const user =useSelector((state)=>state.user)

    
    const inputFilter = useSelector((state)=>state.inputActual.inputFilter)

    const inputA = useSelector((state)=>state.inputActual.inputs)

    const outputA = useSelector((state)=>state.outputActual.outputs)
  
    /*-----------------GET TWO FIRST -----------------------*/

   // const twoFirstInput= useSelector((state)=>state.inputActual.twoFirstInputs)

    //const twoFirstOutput=useSelector((state)=>state.outputActual.twoFirstOutputs)

    const dateFilter1 =new Date(`01 ${inputFilter}`).toISOString()
    const dateFilter2 =new Date(`31 ${inputFilter}`).toISOString()

    const twoFirstInputFilter = inputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2).reverse()

    twoFirstInputFilter.length = 2

    const twoFirstOutputFilter = outputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2).reverse()
    twoFirstOutputFilter.length= 2

     /*-----------------GET INPUT AND OUTPUT TOTAL -----------------------*/

   /* const inputAfilter = inputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2)

    const inputAtotal = inputAfilter.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)

    const outputAfilter = outputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2)

    const outputAtotal = outputAfilter.map(i=>i.price).reduce((p,c)=>p+c,0)/*

    /*----------------------------ACTIVE AND DESACTIVE MODAL--------------------------------- */
    
    const [inputBigButtom,setInputBigButtom]=useState(false)
    const [outputBigButtom,setOutputBigButtom]=useState(false)

    const [addInput,setAddInput]=useState({})
    const [addOutput,setAddOutput]=useState({})

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
            getInputActual(dispatch,user.currentUser.others._id)
            setInputBigButtom(false) 
            
      }catch{}
            getInputActual(dispatch,user.currentUser.others._id)
            getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            setInputBigButtom(false) 

    }
/*----------------------ADD OUTPUT ACTUAL-------------------------*/   

    const handleChangeOutput=(e)=>{
        e.preventDefault()
        setAddOutput(prev=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }

const handleClickOutput=(e)=>{
    e.preventDefault()
    try{
        const outpu = {...addOutput,userId:user.currentUser.others._id}
        addOutputActual(dispatch,outpu)
        getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)
        getOutputActual(dispatch,user.currentUser.others._id)
        setOutputBigButtom(false)

    }catch{}
    getOutputActual(dispatch,user.currentUser.others._id)
    getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)
    setOutputBigButtom(false)
}
    
    return(
        <>
        <section className="section plan">
    {/*--ACTUAL SPENDING--*/}
    <div className="actual-spending">
        <div className="spending-plan-header">
            <p className="section-title-center">ACTUAL SPENDING <i className='bx bx-chevron-down'></i></p>
        </div>

        <div className="spending-plan-body-total">
          {<InputActul input={twoFirstInputFilter} />}

          {<OutputActual output={twoFirstOutputFilter} />}
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
            
                <button onClick={openModalInputBig} className="actual-spending-button blue text-white button_modal">
                    
                    input 
                    
                    <i className='bx bx-plus'></i></button>

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
                    <form className="spending-plan" onSubmit={handleClickOutput}>
        
                        <div onClick={closeModalOutputBig} className="modal-close close_modal" >
                            <i className='bx bx-x text-white'></i>
                        </div>
        
                        <div className="modal-body">
                        <input className="spending-plan-item red" 
                                   onChange={handleChangeOutput}
                                   name="output"
                                   placeholder="New Output"
                                   type="text"
                            />
                            <div >
                                <input className="spending-plan-item white" 
                                       type="number"
                                       onChange={handleChangeOutput}
                                       name="price"
                                        />
                            </div>
        
                        </div>
                        {/*<div>
                            <p className="text-black section-title-center">or</p>
                        </div>
                        <div className="modal-body">   
                            <div className="spending-plan-item red">
                                <p  >select output <i className='bx bx-chevron-down'></i></p>
                            </div>
                            
                            <div >
                                <input className="spending-plan-item white" type="number" />
                            </div>
                        </div>*/}
                            <div className="modal-button-container">
                                <button className="actual-spending-button red text-white ">output <i className='bx bx-minus'></i></button>
                            </div>
        
                    </form>
        
        
                </div>

        </div>

    </div>

        </section>

  

        </>

    )
}