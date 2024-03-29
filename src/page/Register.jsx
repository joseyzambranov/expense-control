import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import  { Navigate  } from 'react-router-dom'
import { register } from "../redux/apiCall"

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
width: 90%;
height: 60px;
border-radius: 25px;


`
const NotUser =  styled.div`
display:flex;
justify-content: end;
padding:.0  3rem 0 0;
font-size:var(--smaller-font-size);

`

const MsjError =  styled.div`
display:flex;
justify-content: center;
padding:.0  3rem 0 0;
font-size:var(--smaller-font-size);

`

const Error = styled.span`
color:var(--red-color);
`
const RegisterTrue = styled.span`
color:var(--blue-color);

`

export default function Login(){

    const translate = useSelector((state)=>state.user.translate) 

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const {isFetching,error} = useSelector((state)=>state.user)

    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const [geristerTrue,setGeristerTrue] = useState(false)
    

    const handleClick =(e)=>{


        e.preventDefault()
        
        try{
            register(dispatch,{username,email,password})
            setGeristerTrue(true)

        }catch{}     
       
    }

    return(<>
        <Header />
        <Title/>
        <Container >
            <Form>

                    <div  className="modal-close ">
                    
                    </div>

                    <div className="modal-body">
                        
                        <span  className="spending-plan-item blue" >{translate?"Username":"Usuario"}</span>
                        
                        <div>
                            <input  className="spending-plan-item white" 
                                    type="text"
                                    onChange={(e)=>setUsername(e.target.value)}  />
                        </div>
                        <span  className="spending-plan-item blue" >{translate?"Email":"Correo"}</span>
                        
                        <div>
                            <input  className="spending-plan-item white" 
                                    type="email"
                                    onChange={(e)=>setEmail(e.target.value)}  />
                        </div>
                        <span  className="spending-plan-item blue" >{translate?"Password":"contraseña"}</span>
                        
                        <div>
                            <input  className="spending-plan-item white" 
                                    type="password"
                                    onChange={(e)=>setPassword(e.target.value)}  />
                        </div>
                    
                    

                    </div>


                    <ContainerButton>
                        <Button onClick={handleClick} className={isFetching?"loader":""} >{translate?"Register":"Registrar"}</Button>
                    </ContainerButton>

                    <MsjError>
                            {error?<Error>{translate?"Somenthing went wrong...":"Algo salió mal..."}</Error>:geristerTrue&&<Link to="/Login"><RegisterTrue>{translate?"Registration Successfully":"Registro Exitoso"}</RegisterTrue></Link>}
                    </MsjError>

                    <NotUser>
                        
                        <Link to="/ForgotPassword">
                             <span>{translate?"Recovery Password":"Recuperar Contraseña"}</span>
                        </Link>

                    </NotUser>




            </Form>

        </Container>
        <Footer/>
        </>


    )
}