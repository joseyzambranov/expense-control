import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import {Link} from "react-router-dom"
import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import { login } from "../redux/apiCall"

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

const Error = styled.span`
color:var(--red-color);
`
const RegisterTrue = styled.span`
color:var(--blue-color);

`

export default function Login(){

    const [email,setEmail]=useState("")
    const [password,setUserPassword]=useState("")
    const dispatch = useDispatch()
    const {isFetching,error} = useSelector((state)=>state.user)
    const [loginTrue,setLoginTrue] = useState(false)

    const user = useSelector((state)=>state.user.currentUser)
    const translate = useSelector((state)=>state.user.translate) 

    const handleClick=(e)=>{

        e.preventDefault()
        
        try{
            login(dispatch,{email,password})
            setLoginTrue(true)
            
        }catch{} 
            
    }

    
    if(!isFetching&&!error&&loginTrue){
        //window.location.reload()
        window.location.href="/expense-control"
    }
 
    
    return(<>
        <Header />
            <Title/>
               <Container >
                    <Form>

                        <div  className="modal-close "></div>

                        <div className="modal-body">
                            
                            <span  className="spending-plan-item blue" >{translate?"Email":"Correo"}</span>
                            
                            <div>
                                <input  className="spending-plan-item white" 
                                        type="text"  
                                        onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <span  className="spending-plan-item blue" >{translate?"Password":"contraseña"}</span>
                            
                            <div>
                                <input  className="spending-plan-item white" 
                                        type="password" 
                                        onChange={(e)=>setUserPassword(e.target.value)}  />
                            </div>
                        
                        </div>

                         <ContainerButton  >

                            <Button onClick={handleClick} className={isFetching?"loader":""}>{translate?"Login":"Inicio de sesión"}</Button>
                           

                        </ContainerButton>
                        
                        <MsjError>
                                {error&&<Error>{translate?"Somenthing went wrong...":"Algo salió mal..."}</Error>}{loginTrue||user&&<Link to="/"><RegisterTrue>{translate?"is Correct!!!! click here to start":"¡¡¡¡Es correcto!!!! Haz click aquí para comenzar"}</RegisterTrue></Link>}
                        </MsjError>
                        <NotUser>
                        
                            <Link to="/Register">
                                 <span>{translate?"Not a User":"No soy usuario"}</span>
                            </Link>

                          

                        </NotUser>
                        <NotUser>
                        <Link to="/ForgotPassword">
                             <span>{translate?"Recovery Password":"Recuperar contraseña"}</span>
                        </Link>
                        </NotUser>
                        
                    </Form>
                </Container>
        <Footer/>
        </>


    )
}

