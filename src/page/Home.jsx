
import ButtonAndTotal from "../components/buttonAndTotal/ButtonAndTotal"
import DateTitle from "../components/date/DateTilte"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Plan from "../components/plan/Plan"
import Title from "../components/title/Title"

export default function Home(){
    return(
        <div>
    <Header />
    <Title />
    <DateTitle />
    <Plan />
    <ButtonAndTotal />
    <Footer />
    

        </div>
    )    
}