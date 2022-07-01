import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import { getOutputActual, updateOutput } from "../redux/apiCall"

const Container = styled.div`
position: relative;
height:70vh;
display: flex;
align-items: center;
justify-content: center;
`  
const Form = styled.div`

background-color: var(--green-color);
width: 500px;
border-radius: 25px;
justify-self:center;
padding:1rem 0 1rem 0;

`
const ContainerButton = styled.div`

display: flex;
justify-content: flex-end;
margin-right: 45px;
padding: 15px 0 15px 0;

`
const Button =styled.button`
color:white;
background-color:var(--red-color);
width: 60%;
height: 60px;
border-radius: 25px;
&:disabled{
    background:green;
    cursor:not-allowed;
}

`
const MsjError =  styled.div`
display:flex;
justify-content: center;
padding:.0  3rem 0 0;
font-size:var(--smaller-font-size);

`

const NotUser =  styled.div`
display:flex;
justify-content: end;
padding:.0  3rem 0 0;
font-size:var(--smaller-font-size);

`

export default function OutputEdit(){

const translate = useSelector((state)=>state.user.translate) 
const user =useSelector((state)=>state.user)
const dispatch =useDispatch()
const [outputs,setOutputs]=useState({})
const location = useLocation()
const outputId = location.pathname.split("/")[3]

let navigate = useNavigate();

const output = useSelector((state)=>state.outputActual.outputs.find((output)=>output._id===outputId))




const handleChange =(e)=>{
    
setOutputs(prev=>{
    return{...prev,[e.target.name]:e.target.value} 
 })
}

const handleClick =(e)=>{
    
    e.preventDefault()
try{
    updateOutput(outputId,outputs,dispatch)
    getOutputActual(dispatch,user.currentUser.others._id)
}catch{}
   
    return navigate("/expense-control/Table")

}


    return(
        <>
        <Title/>
        <Container >
                    <Form >

                        <div  className="modal-close "></div>

                        <div className="modal-body">
                            
                            <span  className="spending-plan-item red" >{translate?"Output":"Gasto"}</span>
                            
                            <div>
                                <input  className="spending-plan-item white" 
                                        type="text" 
                                        name="output"
                                        value={outputs.output}
                                        placeholder={output.output}
                                        onChange={handleChange}/>
                            </div>
                            <span  className="spending-plan-item red" >{translate?"Price":"Precio"}</span>
                            
                            <div>
                                <input  className="spending-plan-item white" 
                                        type="number" 
                                        name="price"
                                        value={outputs.price}
                                        placeholder={output.price}
                                        onChange={handleChange}  />
                            </div>
                        
                        </div>

                         <ContainerButton  >

                            <Button  onClick={handleClick}>{translate?"Edit":"Editar"}</Button>
                           

                        </ContainerButton>
                        
                     
                        <NotUser>
                        
                            <Link to="/expense-control/Table">
                                 <span>{translate?"Back":"Volver"}</span>
                            </Link>

                        </NotUser>
                        
                    </Form>
                </Container>

        <Footer/>
        </>
       

    )
}