import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import Date from "../components/date/DateTilte"

export default function Table (){
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
                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>

                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>

                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>

                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>
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
                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>

                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>

                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>

                            <tr>
                                <td>0001</td>
                                <td>12/01/2022</td>
                                <td>gas</td>
                                <td>250</td>
                                <td><i className='bx bx-edit'></i> <i className='bx bx-trash'></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </section>
        <Footer />
        </>
    )
} 