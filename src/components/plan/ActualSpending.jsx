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
import {useNavigate} from "react-router-dom"
import {HashRouter } from 'react-router-dom';


export default function ActualSpending({inputTotal,outputTotal}){


    const {isFetching,error} = useSelector((state)=>state.inputActual)
    const {isFetching1,error1} = useSelector((state)=>state.outputActual)
    const translate = useSelector((state)=>state.user.translate) 

    const navigate=useNavigate()

    const dispatch =useDispatch()
    const user =useSelector((state)=>state.user)

    
    const inputFilter = useSelector((state)=>state.inputActual.inputFilter)

    const inputA = useSelector((state)=>state.inputActual.inputs)

    const outputA = useSelector((state)=>state.outputActual.outputs)
  
    /*-----------------GET TWO FIRST -----------------------*/

    const dateFilter1 =new Date(`01 ${inputFilter}`).toISOString()
    const dateFilter2 =new Date(`31 ${inputFilter}`).toISOString()

    const twoFirstInputFilter = inputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2).reverse()

    twoFirstInputFilter.length = 2

    const twoFirstOutputFilter = outputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2).reverse()
    twoFirstOutputFilter.length= 2

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
            if(!user.currentUser){

                navigate("/login")

            }else{
                    const inpu =  {...addInput,userId:user.currentUser.others._id}
                    addInputActual(dispatch,inpu)
            }

            getInputActual(dispatch,user.currentUser.others._id)
            getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            
            

            if(!isFetching){
                setInputBigButtom(false) 
                getInputActual(dispatch,user.currentUser.others._id)
                getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            }
            
       

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
    if(!user.currentUser){
        navigate("/login")
    }else{
        
            const outpu = {...addOutput,userId:user.currentUser.others._id}
            addOutputActual(dispatch,outpu)
        
    }
    getOutputActual(dispatch,user.currentUser.others._id)
    getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)

    if(!isFetching1){
        setOutputBigButtom(false)
        getOutputActual(dispatch,user.currentUser.others._id)
        getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)
    }

    
    
    
}
    
    return(
        <>
        <section className="section plan">
    {/*--ACTUAL SPENDING--*/}
    <div className="actual-spending">
        <div className="spending-plan-header">
            <p className="section-title-center">{translate?'ACTUAL MONTHLY EXPENDITURE':'GASTO MENSUAL ACTUAL'} </p>
        </div>

        <div className="spending-plan-body-total">
          {<InputActul input={twoFirstInputFilter} />}

          {<OutputActual output={twoFirstOutputFilter} />}
        <div>

            </div>

            <Link to="Table">
            <div className="spending-plan-item-list">
                <a><i className='bx bx-spreadsheet'></i></a>
            </div>
            </Link>


         
         
    

            <OutputActualTotal outputTotal={outputTotal}/>
            <InputActualTotal inputTotal={inputTotal}/>

        </div>
        <div className="container-actual-button">
            
                <button onClick={openModalInputBig} className="actual-spending-button blue text-white button_modal">
                    
                    {translate?'input':'ingreso'} 
                    
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
                                   placeholder={translate?"New Input":'nuevo ingreso'}
                                   type="text"
                            />
                            
                            <div >
                            <input type="number"
                                    step="any"
                                   name="price"
                                   className="spending-plan-item white"
                                   onChange={handleChange}
                                    />
                            </div>
        
                        </div>
                    
                            <div className="modal-button-container">
                                <button className={`actual-spending-button blue text-white ${isFetching?"loader":""}`}>{translate?"input":"ingreso"} <i className='bx bx-plus'></i></button>
                            </div>
        
                    </form>
        
        
                </div>
            
                <button onClick={openModalOutputBig} className="actual-spending-button red text-white button_modal">{translate?'output':"gasto"} <i className='bx bx-minus'></i></button>
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
                                   placeholder={translate?'New Output':'nuevo gasto'}
                                   type="text"
                            />
                            <div >
                                <input className="spending-plan-item white" 
                                       type="number"
                                       step="any"
                                       onChange={handleChangeOutput}
                                       name="price"
                                        />
                            </div>
        
                        </div>
          
                            <div className="modal-button-container">
                                <button className={`actual-spending-button red text-white  ${isFetching1?"loader":""}`}>{translate?'output':'gasto'} <i className='bx bx-minus'></i></button>
                            </div>
        
                    </form>
        
        
                </div>

        </div>

    </div>

        </section>

  

        </>

    )
}