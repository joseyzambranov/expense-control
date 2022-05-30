import "../../index.css"

export default function ButtonAndTotal(){

    const modalViews = document.querySelectorAll(".modal"),
      modalButton = document.querySelectorAll(".button_modal"),
      modalCloses =document.querySelectorAll(".close_modal")

let modal = function(modalClick){
    modalViews[modalClick].classNameList.add("modal-active")
}      

modalButton.forEach((modalbtn,i)=>{
    modalbtn.addEventListener("click",()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click",()=>{
        modalViews.forEach((modalView)=>{
            modalView.classNameList.remove("modal-active")
        })
    })
})

    return(
        <section className="section button-plan">
        <div className="total">
            <h2>SAVED: 0 $</h2>
        </div>
        
        
    </section>
    )

       
        
    }