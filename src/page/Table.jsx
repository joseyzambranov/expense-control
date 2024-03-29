import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import DateTitle from "../components/date/DateTilte"
import { useDispatch, useSelector } from "react-redux"
import { format } from 'timeago.js';
import { deleteInputActual, deleteOutputActual } from "../redux/apiCall"
import { Link } from "react-router-dom"

export default function Table (){

    const dispatch = useDispatch()
    const translate = useSelector((state)=>state.user.translate) 
    const input = useSelector((state)=>state.inputActual.inputs)
    const output = useSelector((state)=>state.outputActual.outputs)
    const inputFilter = useSelector((state)=>state.inputActual.inputFilter)

    const {isFetching} = useSelector((state)=>state.inputActual)
    const {isFetching1} = useSelector((state)=>state.outputActual)

    const handleDelete =(id)=>{
        deleteInputActual(id,dispatch)
    }

    const handleDeleteOutput =(id)=>{
        deleteOutputActual(id,dispatch)
       
    }

    const dateFilter1 =new Date(`01 ${inputFilter}`).toISOString()
    const dateFilter2 =new Date(`31 ${inputFilter}`).toISOString()

    const inputF = input.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2)
    const outputF = output.filter(n=>n.createdAt>dateFilter1&&n.createdAt<dateFilter2)

    return(
    <>
    <Header />

<Title/>
<DateTitle/>
      <section className="section-table table">
            {/*--TABLE INPUT--*/}
            <div>
                <div>
                    <p className="text-blue section-title-center-table ">{translate?"INPUT":"INGRESO"}</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="th-color-blue">{translate?"ID":"ID"}</th>
                                <th className="th-color-blue">{translate?"DATE":"FECHA"}</th>
                                <th className="th-color-blue">{translate?"INPUT":"INGRESO"}</th>
                                <th className="th-color-blue">{translate?"PRICE":"PRECIO"}</th>
                                <th className="th-color-blue">{translate?"ACTION":"ACCIÒN"}</th>
                            </tr>
                        </thead>
                        <tbody>
                        {inputF.map(i=>{
                            return(<>
                           
                                    <tr>
                                        <td>{i._id}</td>
                                        <td>{format(i.createdAt)}</td>
                                        <td>{i.input}</td>
                                        <td>{i.price}</td>
                                        <td>
                                            <div className={isFetching?"loader1":""}>
    

                                            <Link to={"/InputEdit/"+i._id}>
                                                <button><i className='bx bx-edit container-editAndDelete'></i></button>
                                             </Link> 

                                           <button onClick={()=>handleDelete(i._id)}>
                                                <i  
                                                   className={`bx bx-trash`}></i>
                                            </button>
                                            
                                            </div> 
                                        </td>
                                    </tr>
                                    
                                    
                                   
                                </>
                                
                            )
                        })}
                        </tbody>

                    </table>
                </div>

            </div>
            {/*--TABLE OUTPUT--*/}
            <div>
                <div>
                    <p className="text-red section-title-center-table ">{translate?"OUTPUT":"GASTO"}</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th className="th-color-red">{translate?"ID":"ID"}</th>
                                <th className="th-color-red">{translate?"DATE":"FECHA"}</th>
                                <th className="th-color-red">{translate?"OUTPUT":"GASTO"}</th>
                                <th className="th-color-red">{translate?"PRICE":"PRECIO"}</th>
                                <th className="th-color-red">{translate?"ACTION":"ACCIÒN"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {outputF.map(i=>{
                                return(<>
                                <tr>
                                <td>{i._id}</td>
                                <td>{format(i.createdAt)}</td>
                                <td>{i.output}</td>
                                <td>{i.price}</td>
                                <td>
                                    
                                    <div  className={isFetching1?"loader1":""}>

                                    <Link to={"/OutputEdit/"+ i._id}>
                                        <button><i className='bx bx-edit container-editAndDelete'></i></button>
                                    </Link> 
                                    <button onClick={()=>handleDeleteOutput(i._id)} >
                                        <i 
                                        className={`bx bx-trash`}></i>
                                    </button>

                                    </div> 
                                    
                                </td>
                            </tr>
                                
                                        </>)
                            })}
                            
                        </tbody>
                    </table>
                </div>

            </div>

        </section>
        <Footer />
        </>
    )
} 