import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonAndTotal from "../components/buttonAndTotal/ButtonAndTotal"
import DateTitle from "../components/date/DateTilte"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Plan from "../components/plan/Plan"
import Title from "../components/title/Title"
import { getInputActual, getOutputActual, getTwoFirstInputActual } from "../redux/apiCall"
import { addInputTotal } from "../redux/inputTotalRedux"
import { userNologin } from "../redux/userRedux"

export default function Home(){

    const user =useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const inputActual = useSelector((state)=>state.inputActual.inputs)
    const outputActual = useSelector((state)=>state.outputActual.outputs)
    const inputTotal = useSelector((state)=>state.inputActual.total)

    
    /*--------------------------total input----------------------------- */

    useEffect(()=>{
            
        try{

            getInputActual(dispatch,user.currentUser.others._id)
            getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            //addInputTotal(dispatch)
    
        }catch{}
        //dispatch(addInputTotal(inputActual))
            
    },[dispatch])  

    /*useEffect(()=>{
        try{
            getInputActual(dispatch,user.currentUser.others._id)
           const sumInput = inputActual.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
           setInputTotal(sumInput)

        }catch{}
            
        },[dispatch])
    
    
    const [inputTotal,setInputTotal]=useState(0)*/

        /*--------------------------total output----------------------------- */
    
        useEffect(()=>{
        try{
            getOutputActual(dispatch,user.currentUser.others._id)
            const sumOutput = outputActual.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
            setOutputTotal(sumOutput)

        }catch{}
            
        },[dispatch])
    
    const [outputTotal,setOutputTotal]=useState(0)


    return(
        <div>
    <Header />
    <Title />
    <DateTitle />
    <Plan outputTotal={outputTotal} inputTotal={inputTotal}  />
    <ButtonAndTotal inputTotal={inputTotal} outputTotal={outputTotal} />
    <Footer />
    

        </div>
    )    
}