import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import Date from "../components/date/DateTilte"
import { useDispatch, useSelector } from "react-redux"
import { format } from 'timeago.js';
import { deleteInputActual, deleteOutputActual, getOutputActual } from "../redux/apiCall"
import { useEffect } from "react"

export default function Table (){

    const dispatch = useDispatch()

    const user =useSelector((state)=>state.user)
    const input = useSelector((state)=>state.inputActual.inputs)
    const output = useSelector((state)=>state.outputActual.outputs)

    const handleDelete =(id)=>{
        deleteInputActual(id,dispatch)
    }

    const handleDeleteOutput =(id)=>{
        deleteOutputActual(id,dispatch)
        getOutputActual(dispatch,user.currentUser.others._id)
       
    }

    /*useEffect(()=>{
            
        try{

          //  getInputActual(dispatch,user.currentUser.others._id)
          //  getTwoFirstInputActual(dispatch,user.currentUser.others._id)
            getOutputActual(dispatch,user.currentUser.others._id)
           // getTwoFirstOutputActuaL(dispatch,user.currentUser.others._id)

    
        }catch{}

            
    },[dispatch,user])  */

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
                                        <td><i className='bx bx-edit'></i> <i onClick={()=>handleDelete(i._id)} 
                                                                              className='bx bx-trash '></i></td>
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
                                <td><i className='bx bx-edit'></i> <i onClick={()=>handleDeleteOutput(i._id)}
                                                                      className='bx bx-trash'></i></td>
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