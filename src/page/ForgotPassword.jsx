import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import swal from "sweetalert2"
import { useSelector } from "react-redux"

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

export default function ForgotPassword (){

    const translate = useSelector((state)=>state.user.translate) 

    const [email,setEmail] = useState()
    const [isLoading,setIsLoading] = useState(false)

    const handleClick = async (e)=>{

        e.preventDefault() 
        setIsLoading(true);
        
       await axios.post(process.env.REACT_APP_BASE_URL+"forgotpassword",{"email":email})
       .then((res)=>{
        setIsLoading(false)
        swal.fire({
            showConfirmButton:true,
            icon:"succes",
            text:`${translate?"Check your email, a link has been sent to reset your password":"Revise su correo electrónico, se ha enviado un enlace para restablecer su contraseña"}`
        })
       }).catch((err)=>{
        setIsLoading(false)
        swal.fire({
            showConfirmButton:true,
            icon:"error",
            text:`${translate?"An error occurred, check email and try again later":"Ocurrió un error, revise el correo electrónico y vuelva a intentarlo más tarde"}`
        })

       })
        
    
    }
  
    console.log(email)
    return(<>
        <Header />
        <Title/>
        <Container >
            <Form>

                    <div  className="modal-close ">
                    
                    </div>

                    <div className="modal-body">
                        
                        <span  className="spending-plan-item blue" >{translate?"Email":"Correo"}</span>
                        
                        <div>
                            <input  className="spending-plan-item white" 
                                    type="email"
                                    placeholder={translate?"enter your email":"ingresa tu correo"}
                                    onChange={(e)=>setEmail(e.target.value)}  />
                        </div>
                    
                    </div>


                    <ContainerButton>
                        <Button onClick={handleClick} className={isLoading?"loader":""}>{translate?"Recover Password":"Recuperar contraseña"}</Button>
                    </ContainerButton>


            </Form>

        </Container>
        <Footer/>
        </>
        
    )

}