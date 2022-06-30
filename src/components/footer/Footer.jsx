import { useSelector } from "react-redux"
import "../../index.css"

export default function Footer(){

    const translate = useSelector((state)=>state.user.translate) 

    return(
        <footer className="section section-title-center">
        <a href="https://josezambrano.netlify.app/" className="text-black">Jose Zambrano {translate?'all rights reserved':'todos los derechos reservado'} </a>
    </footer>
    )
}