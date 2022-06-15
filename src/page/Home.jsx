import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonAndTotal from "../components/buttonAndTotal/ButtonAndTotal"
import DateTitle from "../components/date/DateTilte"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Plan from "../components/plan/Plan"
import Title from "../components/title/Title"
import { getInputActual, getOutputActual, getTwoFirstInputActual, getTwoFirstOutputActuaL } from "../redux/apiCall"

export default function Home(){

    const user =useSelector((state)=>state.user)
    const dispatch = useDispatch()
   
    const outputTotal = useSelector((state)=>state.outputActual.total)
    const inputTotal = useSelector((state)=>state.inputActual.total)

    /*-------------------------- GET TWO FIRST ,  GET TOTAL----------------------------- */

    useEffect(()=>{
            
        try{

            getInputActual(dispatch,user.currentUser.others._id)
            getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            getOutputActual(dispatch,user.currentUser.others._id)
            getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)

    
        }catch{}

            
    },[dispatch,user])  

        /*--------------------------total output----------------------------- */


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