import "../../index.css";
import styled from "styled-components"
//import "./dateTitle.css"

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
    return(
        <section  className="section-title-center section">

            <Select name="date" id="date-select">

            <Option selected value="">SELECT A DATE </Option>
            <Option value="">JANUARY 2022</Option>
            <Option value="">FEBRUARY 2022</Option>
            <Option value="">MARCH 2022</Option>

            </Select>

        </section>
    )
}
