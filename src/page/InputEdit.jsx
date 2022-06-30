import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import { getInputActual, updateInput } from "../redux/apiCall"

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
background-color:var(--blue-color);
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

export default function InputEdit(){

const translate = useSelector((state)=>state.user.translate) 

const user =useSelector((state)=>state.user)
const dispatch =useDispatch()
const [inputs,setInputs]=useState({})
const location = useLocation()
const inputId = location.pathname.split("/")[3]

const input = useSelector((state)=>state.inputActual.inputs.find((input)=>input._id===inputId))




const handleChange =(e)=>{
    
 setInputs(prev=>{
    return{...prev,[e.target.name]:e.target.value} 
 })
}

const handleClick =(e)=>{
    e.preventDefault()
try{
    updateInput(inputId,inputs,dispatch)
    getInputActual(dispatch,user.currentUser.others._id)
}catch{}
    
    return navigate("/expense-control/Table")

}

let navigate = useNavigate();

console.log(inputs)

    return(
        <>
        <Header/>
        <Title/>
        <Container >
                    <Form >

                        <div  className="modal-close "></div>

                        <div className="modal-body">
                            
                            <span  className="spending-plan-item blue" >{translate?"Input":"Ingreso"}</span>
                            
                            <div>
                                <input  className="spending-plan-item white" 
                                        type="text" 
                                        name="input"
                                        value={inputs.input}
                                        placeholder={input.input}
                                        onChange={handleChange}/>
                            </div>
                            <span  className="spending-plan-item blue" >{translate?"Price":"Precio"}</span>
                            
                            <div>
                                <input  className="spending-plan-item white" 
                                        type="number" 
                                        name="price"
                                        value={inputs.price}
                                        placeholder={input.price}
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

