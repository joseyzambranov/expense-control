import { useSelector } from "react-redux"

export default function OutputActualTotal({outputTotal}){

    const translate = useSelector((state)=>state.user.translate) 


    return(
        <div className="spending-plan-item-total item-a red">
        <p>{translate?"Total Output":"Gasto Total"}</p>
        <div className="spending-plan-item-total-num white">
            <p className="text-black">{outputTotal} $</p>
        </div>
    </div>
    )
}