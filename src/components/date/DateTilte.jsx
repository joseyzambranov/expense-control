import "../../index.css";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { inputFilterActual } from "../../redux/inputActualRedux";

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



export default function DateTitle(){

    const dispatch = useDispatch()

    const input = useSelector((state)=>state.inputActual.inputs)
    const inputFilter = useSelector((state)=>state.inputActual.inputFilter)


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

    const re = /(?<year>\d{4})-(?<month>\d{2})/ 

    const date = input.map((i)=>new Date(i.createdAt))

    const filter = date.map((i)=>re.exec(i.toISOString()))

   const dateFilter = filter.map((i)=>`${month[Number(i.groups.month)]} ${i.groups.year}`)

   const resultFilter = dateFilter.filter((item,index)=>{

    return dateFilter.indexOf(item)===index
   
    })

    return(
        <section  className="section-title-center section">

            <Select name="date" id="date-select" onClick={e=>dispatch(inputFilterActual(e.target.value))}>

            <Option value={inputFilter?inputFilter:"SELECT A DATE"} >{inputFilter?inputFilter:"SELECT A DATE"}</Option>

            {resultFilter.map((i)=>(

                <Option value={i} >{i}</Option>
            ))}

            </Select>

        </section>
    )
}