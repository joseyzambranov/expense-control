import { useSelector } from "react-redux"
import "../../index.css"

export default function Footer(){

    const translate = useSelector((state)=>state.user.translate) 

    return(
        <footer className="section section-title-center">
        <a href= {translate?'https://joseyzambranov.netlify.app/en':'https://joseyzambranov.netlify.app/es'} className="text-black">Jose Zambrano {translate?'all rights reserved':'todos los derechos reservado'} </a>
    </footer>
    )
}