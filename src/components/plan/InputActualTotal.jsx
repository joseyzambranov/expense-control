import { useSelector } from "react-redux"

export default function InputActualTotal({inputTotal}){

    const translate = useSelector((state)=>state.user.translate) 

    return(
        <div className="spending-plan-item-total blue ">
        <p>{translate?'Total Input':'Ingreso Total'}</p>
        <div className="spending-plan-item-total-num white ">
            <p className="text-black">{inputTotal} $</p>
        </div>
    </div>
    )
}