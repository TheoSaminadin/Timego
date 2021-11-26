import React, { useState, useEffect } from "react";

import ReactDOM from 'react-dom';

function Timer() {


    //const start_btn = React.createElement('button', {},
    //'Go')
    //const stop_btn = React.createElement('button', {},
    //'Stop')

    //ReactDOM.render(start_btn, document.querySelector('#start'))
    //ReactDOM.render(stop_btn, document.querySelector('#stop'))

    const [startBtn, setStartBtn] = useState('LANCER')
    const [count, setCount] = useState(0)
    const [InputTime, setInputTime] = useState(0);

    const GetInputTime = (event) => {
        setInputTime((event.target.value))
       
        setCount(InputTime)
        
    }


    useEffect(() => {
        // executé après le premier rendu et à chaque changement des variables entre crochets....****

        if (startBtn == 'STOP') {
            const interval = setTimeout(() => {
                setInputTime(InputTime - 1)
                setCount(count - 1)
                document.getElementById('timeInput').disabled = true;
            }, 1000);
            if (startBtn == 'LANCER') {
                document.getElementById('timeInput').disabled = false;


                // executé lorsque l'on ferme l'application

               return(clearTimeout(interval))
            }

            if (count == 0) {
                return (document.getElementById('score').style.display = "block", clearTimeout(interval))
                
            }
        }
            // lorsque ces variables entre cochets changent la fonction useEffect sera appellée *****
        }, [count,startBtn]);



const changeValue = () => {
    console.log(startBtn)
    if (startBtn == 'LANCER') {
        setStartBtn('STOP')
    }
    else if (startBtn == 'STOP') {
        setStartBtn('LANCER')

    }

}

return (

        <div>
            <input min="-1" max="61" step="1" onChange={GetInputTime} id="timeInput" type="range" value={InputTime}></input>
            <div class="time"><h1>Temps :</h1>{count}</div>
            <button onClick={changeValue}>{startBtn}</button>
            <div style={{display:'none'}} id="score"><h1> Bravo ! tu as travaillé {count} et gagné {point} lingots</h1></div>
        </div>
    )

}

export default Timer