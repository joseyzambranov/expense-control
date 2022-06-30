import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { translateTrue, translateFalse } from "../../redux/userRedux"

export default function Translate(){

const dispacth = useDispatch()
const translate = useSelector((state)=>state.user.translate)    

/*------------Modal-------------- */

const closeModal =()=>{
    dispacth(translateFalse())
}
const openModal=()=>{
    dispacth(translateTrue())
}

    return(

        <div className="container-header-translate" >
           <div className="container-title-header">
              
           {translate
           ?
           <span onClick={closeModal} class='text-white-translate'>ES</span>
           :
           <span onClick={openModal} class='text-white-translate'>EN</span>}
            </div>
        </div>

   

    )
}
