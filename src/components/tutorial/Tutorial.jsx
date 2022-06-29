import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tutorialFalse, tutorialTrue } from "../../redux/userRedux"

export default function Tutorial(){

const dispacth = useDispatch()
const tutorial = useSelector((state)=>state.user.tutorial)    

/*------------Modal-------------- */

const closeModal =()=>{
    dispacth(tutorialFalse())
}
const openModal=()=>{
    dispacth(tutorialTrue())
}

console.log(tutorial)


    return(

        <div className="container-header-tutorial" >
           <div className="container-title-header">
              
           <i onClick={openModal} class='bx bx-book-alt text-white-tutorial'></i>
           <div className={`modal  ${tutorial?"modal-active":""}`}>
                    {/*--MODAL--*/}
                    
                    <div  >
                    
                    <div onClick={closeModal} className="modal-close ">
                        <i className='bx bx-x text-white'></i>
                    </div>

                    <div className="spending-plan-tutorial-img "></div>
        
                    </div>
        
        
    </div>
               
               
               
           
            </div>
        </div>

   

    )
}

