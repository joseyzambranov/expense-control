import "../../index.css";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { inputFilterActual } from "../../redux/inputActualRedux";
import { getTwoFirstInputActual } from "../../redux/apiCall";

const Select = styled.select`

appearance: none;
border: 0;
outline: 0;
font: inherit;
/*width: 15em;*/
height: 1.3em;
text-align: center;
padding: 0 4rem 0 0;
font-size: var(--big-font-size);
font-weight: var(--font-black);
color: var(--black-color);
background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right, linear-gradient(to left, rgba(2, 60, 64, 1) 1.2em, rgba(225, 250, 249, 1) 1.2em);
/*background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) 
no-repeat right 0.8em center/1.4em, linear-gradient(to left, rgba(2, 60, 64, 1) 1em, rgba(225, 250, 249, 1) 1em);*/
cursor: pointer;
border-radius: 1rem;

`
const Option = styled.option`
background-color: var(--gray-color);
font-size: var(--normal-font-size);
text-align: center;
`
const  Input =styled.input`
appearance: none;
border: 0;
outline: 0;
font: inherit;
/*width: 15em;*/
height: 1.3em;
text-align: center;
padding: 0 4rem 0 0;
font-size: var(--big-font-size);
font-weight: var(--font-black);
color: var(--black-color);
background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right, linear-gradient(to left, rgba(2, 60, 64, 1) 1.2em, rgba(225, 250, 249, 1) 1.2em);
/*background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) 
no-repeat right 0.8em center/1.4em, linear-gradient(to left, rgba(2, 60, 64, 1) 1em, rgba(225, 250, 249, 1) 1em);*/
cursor: pointer;
border-radius: 1rem;

`


export default function DateTitle(){

    const translate = useSelector((state)=>state.user.translate) 

    const dispatch = useDispatch()

    const input = useSelector((state)=>state.inputActual.inputs)
    const output = useSelector((state)=>state.outputActual.outputs)


    const month = [
        "DECEMBER",
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER"
    ] 
    const mes = [
        "DICIEMBRE",
        "ENERO",
        "FEBRERO",
        "MARZO",
        "ABRIL",
        "MAYO",
        "JUNIO",
        "JULIO",
        "AGOSTO",
        "SEPTIEMBRE",
        "OCTUBRE",
        "NOVIEMBRE"
    ] 

    const re = /(?<year>\d{4})-(?<month>\d{2})/ 

    const date = input.map((i)=>new Date(i.createdAt))

    const dateOutput = output.map((i)=>new Date(i.createdAt))

    const filterDataTotal = [...date , ...dateOutput]

    var uniqueDate = [...new Set(filterDataTotal)]

    const filter = uniqueDate.map((i)=>re.exec(i.toISOString()))

   const dateFilter = filter.map((i)=>`${translate?month[Number(i.groups.month)]:mes[Number(i.groups.month)]} ${i.groups.year}`)

   const resultFilter = dateFilter.filter((item,index)=>{

    return dateFilter.indexOf(item)===index
   
    })

    const actualmont = re.exec(new Date().toISOString())

    const dateActual = `${month[Number(actualmont.groups.month)]} ${new Date().getFullYear()}`

    return(
        <section   className="section-title-center section">

           <Select onChange={(e)=>dispatch(inputFilterActual(e.target.value))}>
                
           
            <Option value={dateActual} >{translate?"FILTER DATE":"FILTRAR FECHA"}</Option>

            {resultFilter.map((i)=>(

            <Option  value={i} >{i}</Option>
            ))}
     

            </Select>

        </section>
    )
}
