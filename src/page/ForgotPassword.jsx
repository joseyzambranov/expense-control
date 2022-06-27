import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import swal from "sweetalert2"

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
            text:"Check your email, a link has been sent to reset your password"
        })
       }).catch((err)=>{
        setIsLoading(false)
        swal.fire({
            showConfirmButton:true,
            icon:"error",
            text:"An error occurred, check email and try again later"
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
                        
                        <span  className="spending-plan-item blue" >Email</span>
                        
                        <div>
                            <input  className="spending-plan-item white" 
                                    type="email"
                                    placeholder="enter your email"
                                    onChange={(e)=>setEmail(e.target.value)}  />
                        </div>
                    
                    </div>


                    <ContainerButton>
                        <Button onClick={handleClick} className={isLoading?"loader":""}>Recover Password</Button>
                    </ContainerButton>


            </Form>

        </Container>
        <Footer/>
        </>
        
    )

}