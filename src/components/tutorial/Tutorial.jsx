import { useState } from "react"

export default function Tutorial(){

/*------------Modal-------------- */
const [activeContainer,setActiveContainer]=useState(false)


const closeModal =()=>{
    setActiveContainer(false)
}
const openModal=()=>{
    setActiveContainer(true)
}


    return(

        <div className="container-header-tutorial" >
           <div className="container-title-header">
              
           <i onClick={openModal} class='bx bx-book-alt text-white-tutorial'></i>
           <div className={`modal  ${activeContainer?"modal-active":""}`}>
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

