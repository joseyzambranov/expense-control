import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Title from "../components/title/Title"
import {Link} from "react-router-dom"

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
export default function Login(){


    return(<>
        <Header />
        <Title/>
        <Container >
            <Form>

<div  className="modal-close ">
   
</div>

<div className="modal-body">
    
    <span  className="spending-plan-item blue" >UserName</span>
    
    <div>
        <input  className="spending-plan-item white" type="text"  />
    </div>
    <span  className="spending-plan-item blue" >Password</span>
    
    <div>
        <input  className="spending-plan-item white" type="password"  />
    </div>
   
   

</div>


<ContainerButton>
    <Button>Login</Button>
</ContainerButton>

<NotUser>
    <Link to="/Register">
    <span>Not a User</span>
    </Link>

</NotUser>


            </Form>



        </Container>
        <Footer/>
        </>


    )
}

