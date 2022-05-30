export default function OutputList({output,onChangeOut}){
    return(<>
{output.map(i=>{
            return(<>
            <div className="spending-plan-item-checkbox ">
            <input 
            type="checkbox" 
            id={i.id}
            onChange={onChangeOut}
            checked={i.delete}
            />
            </div>
                <div className="spending-plan-item red">
        <p >{i.output}</p>
    </div>
    <div >
        <span className="spending-plan-item white">{i.amount}</span>
    </div>

                
            </>)
        })}
    
    


    </>)
}