import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import {privateRequest } from "../../requestMethods"
import InputActul from "./InputActual"
import OutputActual from "./OutputActual"
import InputActualTotal from "./InputActualTotal"
import OutputActualTotal from "./OutputActualTotal"


export default function ActualSpending(){

    const user =useSelector((state)=>state.user)
    
    const [input,setInput]=useState([])
    const [output,setOutput]=useState([])
   
    const [inputBigButtom,setInputBigButtom]=useState(false)
    const [outputBigButtom,setOutputBigButtom]=useState(false)

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

    useEffect(()=>{
        
        
        const getUserInput = async ()=>{
            
            try{
                const res = await privateRequest.get("input/start/"+user.currentUser.others._id)
                setInput(res.data)
            }catch{}
        }
        getUserInput()

    },[user])
    useEffect(()=>{

        const getUserOutput = async ()=>{
            
            try{
                const res = await privateRequest.get("output/start/"+user.currentUser.others._id)
                setOutput(res.data)
            }catch{}
        }
        getUserOutput()

    },[user])


    /*--------------------------total input----------------------------- */
    
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

        /*--------------------------total output----------------------------- */
    
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
        <section className="section plan">
    {/*--ACTUAL SPENDING--*/}
    <div className="actual-spending">
        <div className="spending-plan-header">
            <p className="section-title-center">ACTUAL SPENDING <i className='bx bx-chevron-down'></i></p>
        </div>

        <div className="spending-plan-body-total">
          <InputActul input={input} />
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
                    <div className="spending-plan">
        
                        <div onClick={closeModalInputBig} className="modal-close close_modal" >
                            <i className='bx bx-x text-white'></i>
                        </div>
        
                        <div className="modal-body">
                            <div className="spending-plan-item blue">
                                <p >new input</p>
                            </div>
                            <div >
                                <input className="spending-plan-item white" type="number" />
                            </div>
        
                        </div>
                        <div>
                            <p className="text-black section-title-center">or</p>
                        </div>
                        <div className="modal-body">   
                            <div className="spending-plan-item blue">
                                <p  >select input <i className='bx bx-chevron-down'></i></p>
                            </div>
                            
                            <div >
                                <input className="spending-plan-item white" type="number" />
                            </div>
                        </div>
                            <div className="modal-button-container">
                                <button className="actual-spending-button blue text-white ">input <i className='bx bx-plus'></i></button>
                            </div>
        
                    </div>
        
        
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