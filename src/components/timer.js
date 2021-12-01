import React, { useState, useEffect } from "react";
import '../index.css'
import ReactDOM, { render } from 'react-dom';

//images
import Home from '../img/Home.png';
import GemmeLogo from '../img/GemmeLogo.png';
import NiveauLogo from '../img/NiveauLogo.png';
import Xplogo from '../img/XpLogo.png';




function Timer() {


    //const start_btn = React.createElement('button', {},
    //'Go')
    //const stop_btn = React.createElement('button', {},
    //'Stop')

    //ReactDOM.render(start_btn, document.querySelector('#start'))
    //ReactDOM.render(stop_btn, document.querySelector('#stop'))

    const [startBtn, setStartBtn] = useState('LANCER')
    const [count, setCount] = useState(0)
    const [InputTime, setInputTime] = useState(10);
    const [point, setPoint] = useState(0);
    const [PubPoint, setPubPoint] = useState(0)
    const [second, setSecond] = useState(0)


    const GetInputTime = (event) => {
        setInputTime((event.target.value))

        setCount(InputTime)
        setPoint(InputTime * 0.5)
    }


    useEffect(() => {
        // executé après le premier rendu et à chaque changement des variables entre crochets....****

        if (startBtn == 'ABANDONNER') {

            const Second = setTimeout(() => {
                if (second < 1) {
                    setSecond(59)
                } else {
                    setSecond(second - 1)
                }
                if (count < 1) {
                    setSecond(0)
                    
                }


            }, 1000)


            const Minute = setTimeout(() => {
                setInputTime(InputTime - 1)
                setCount(count - 1)

            }, 60000);


            if (startBtn == 'LANCER') {

                document.getElementById('timeInput').disabled = false

                return (clearTimeout(Minute))
            }
            else if (startBtn == 'ABANDONNER') {
                return (document.getElementById('timeInput').disabled = true)
            }

            if (count == 0) {
setPubPoint(point)
                return (document.getElementById('score').style.display = "block", clearTimeout(Minute))

            }
        }
        // lorsque ces variables entre cochets changent la fonction useEffect sera appellée *****
    }, [count, startBtn, second]);



    const changeValue = () => {
        console.log(startBtn)
        if (startBtn == 'LANCER') {
            setCount(count - 1)
            setStartBtn('ABANDONNER')
        }
        else if (startBtn == 'ABANDONNER') {

            setStartBtn('LANCER')

        }

    }


    // Style 

    return (
        <div className="BigTimerContainer">

            <div className="TimerContainer">

                <div className="StatBar">
                    <p><img alt="XP image" src={Xplogo} /> 23 xp</p>
                    <p><img alt="Gemme image" src={GemmeLogo} /> {PubPoint}</p>
                    <p><img alt="Niveau image" src={NiveauLogo} /> niv 1</p>
                </div>
                <h1 style={{fontFamily:"Montserrat Bold", fontSize:"48px", margin:"0"}}>Choisi ton temps !</h1>
                <p>Tu as choisis un oeuf surprise, tu ne pourras découvrir son contenu qu’à la fin de ta séance...</p>
                <div className="RoundBox" ><img className="HomeEgg" src={Home} />

                    <input className="range" min="9" max="61" step="1" onChange={GetInputTime} id="timeInput" type="range" value={InputTime}></input>
                </div>
                <div className="time"><h1>{count}:{second} min</h1></div>

                <button onClick={changeValue}>{startBtn}</button>
                <div style={{ display: 'none' }} id="score"><h1> Bravo ! tu as travaillé {count} et gagné {point} lingots</h1></div>
            </div>
        </div>
    )


}

export default Timer