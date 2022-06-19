import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import Date from "../components/date/DateTilte"
import { useDispatch, useSelector } from "react-redux"
import { format } from 'timeago.js';
import { deleteInputActual, deleteOutputActual } from "../redux/apiCall"
import { Link } from "react-router-dom"

export default function Table (){

    const dispatch = useDispatch()

    const input = useSelector((state)=>state.inputActual.inputs)
    const output = useSelector((state)=>state.outputActual.outputs)

    const handleDelete =(id)=>{
        deleteInputActual(id,dispatch)
    }

    const handleDeleteOutput =(id)=>{
        deleteOutputActual(id,dispatch)
       
    }

    console.log(input.map((i)=>i.createdAt))

    return(
    <>
    <Header />

<Title/>
<Date/>
      <section className="section-table table">
            {/*--TABLE INPUT--*/}
            <div>
                <div>
                    <p className="text-blue section-title-center-table ">INPUT</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="th-color-blue">ID</th>
                                <th className="th-color-blue">DATE</th>
                                <th className="th-color-blue">INPUT</th>
                                <th className="th-color-blue">COUNT</th>
                                <th className="th-color-blue">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        {input.map(i=>{
                            return(<>
                           
                                    <tr>
                                        <td>{i._id}</td>
                                        <td>{format(i.createdAt)}</td>
                                        <td>{i.input}</td>
                                        <td>{i.price}</td>
                                        <td>
                                            <div>

                                            <Link to={"/InputEdit/" + i._id}>
                                                <button><i className='bx bx-edit'></i></button>
                                             </Link> 

                                           <button onClick={()=>handleDelete(i._id)}>
                                                <i  
                                                   className='bx bx-trash '></i>
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
                    <p className="text-red section-title-center-table ">OUTPUT</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="th-color-red">ID</th>
                                <th className="th-color-red">DATE</th>
                                <th className="th-color-red">OUTPUT</th>
                                <th className="th-color-red">COUNT</th>
                                <th className="th-color-red">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map(i=>{
                                return(<>
                                <tr>
                                <td>{i._id}</td>
                                <td>{format(i.createdAt)}</td>
                                <td>{i.output}</td>
                                <td>{i.price}</td>
                                <td>
                                    
                                    <div>

                                    <Link to={"/OutputEdit/" + i._id}>
                                        <button><i className='bx bx-edit'></i></button>
                                    </Link> 

                                    <button onClick={()=>handleDeleteOutput(i._id)} >
                                        <i 
                                        className='bx bx-trash '></i>
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