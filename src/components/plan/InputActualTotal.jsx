export default function InputActualTotal({inputTotal}){



    return(
        <div className="spending-plan-item-total blue ">
        <p>total entradas</p>
        <div className="spending-plan-item-total-num white ">
            <p className="text-black">{inputTotal} $</p>
        </div>
    </div>
    )
}