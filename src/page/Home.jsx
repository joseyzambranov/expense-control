import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonAndTotal from "../components/buttonAndTotal/ButtonAndTotal"
import DateTitle from "../components/date/DateTilte"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Plan from "../components/plan/Plan"
import Title from "../components/title/Title"
import Translate from "../components/translate/Translate"
import Tutorial from "../components/tutorial/Tutorial"
import { getInputActual, getOutputActual } from "../redux/apiCall"

export default function Home(){

    const user =useSelector((state)=>state.user)
    const dispatch = useDispatch()

    const inputFilter = useSelector((state)=>state.inputActual.inputFilter)

    const inputA = useSelector((state)=>state.inputActual.inputs)

    const outputA = useSelector((state)=>state.outputActual.outputs)

    const dateFilter1 =new Date(`01 ${inputFilter}`).toISOString()
    const dateFilter2 =new Date(`31 ${inputFilter}`).toISOString()

    /*-------------------------- GET TWO FIRST ,  GET TOTAL----------------------------- */

    useEffect(()=>{
            
        try{

            getInputActual(dispatch,user.currentUser.others._id)
           // getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            getOutputActual(dispatch,user.currentUser.others._id)
            //getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)

    
        }catch{}

            
    },[dispatch,user])  

     /*-----------------GET INPUT AND OUTPUT TOTAL -----------------------*/

   const inputAfilter = inputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2)

    const inputTotal = inputAfilter.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)

    const outputAfilter = outputA.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2)

    const outputTotal = outputAfilter.map(i=>i.price).reduce((p,c)=>p+c,0)


    return(
        <>
    <Tutorial/>
    <Translate />   
    <Header />
    <Title />
    <DateTitle />
    <Plan outputTotal={outputTotal} inputTotal={inputTotal}  />
    <ButtonAndTotal inputTotal={inputTotal} outputTotal={outputTotal} />
    <Footer />
    

    </>
    )    
}