export default function OutputActualTotal({outputTotal}){



    return(
        <div className="spending-plan-item-total item-a red">
        <p>Total Output</p>
        <div className="spending-plan-item-total-num white">
            <p className="text-black">{outputTotal} $</p>
        </div>
    </div>
    )
}