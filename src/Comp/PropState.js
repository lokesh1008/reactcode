import React, { useState } from 'react';
import Prophand from './Prophandle';

const Hello = () => {
    const [valuestate, valuesetstate] = useState({
        valueable : [
            {name: 'Luckywarriors', age: 90},
            {name: 'Luckyss', age: 50},
            {name: 'Luckywars', age: 40}
        ]
    })
    const convertssButtonHandler = () =>{
        valuesetstate({
            valueable: [
            {name: 'Mera Nam', age: 25},
            {name: 'Warriors', age: 89},
            {name: 'vision', age: 77}
          ]
        })  
    }
    return (
    <div className="Prop">
        <button onClick = {convertssButtonHandler}>Hello</button>
        <Prophand name = {valuestate.valueable[0].name} age = {valuestate.valueable[0].age}/>
        <Prophand name = {valuestate.valueable[1].name} age = {valuestate.valueable[1].age}/>
        <Prophand name = {valuestate.valueable[2].name} age = {valuestate.valueable[2].age}/>
    </div>
    )
}
export default Hello;