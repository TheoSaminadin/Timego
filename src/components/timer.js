import React, { useState, useEffect, useContext } from "react";
import '../index.css'
import oeufPopUp from '../img/oeufLingot.png';


//images
import Home from '../img/Home.png';
import GemmeLogo from '../img/GemmeLogo.png';
import NiveauLogo from '../img/NiveauLogo.png';
import Xplogo from '../img/XpLogo.png';

import Layout from "./Layout";
import AppContext from "../AppContext";


function Timer() {
    const {
        time,
        setTotalTime,
        isTimerRunning,
        startTimer,
        newPoints,
        points,
        hasWon,
        stopTimer,
        totalTime,

    } = useContext(AppContext);

    //const start_btn = React.createElement('button', {},
    //'Go')
    //const stop_btn = React.createElement('button', {},
    //'Stop')

    //ReactDOM.render(start_btn, document.querySelector('#start'))
    //ReactDOM.render(stop_btn, document.querySelector('#stop'))

    // const [count, setCount] = useState(0)



    // const [startBtn, setStartBtn] = useState('LANCER')
    const [inputTime, setInputTime] = useState(10);
    // const [point, setPoint] = useState(0);
    // const [second, setSecond] = useState(0)
    const blur = 'style={{"filter: blur(10px);"}}'

    const handleInputTimeChange = (event) => {
        if (!isTimerRunning) {
            setInputTime(event.target.value * 60)
            setTotalTime(event.target.value * 60)
        }
        // setInputTime(event.target.value)
        // setInputTime((event.target.value))
        // setCount(InputTime)
        // setPoint(InputTime * 0.5)
    }


    // useEffect(() => {
    // executé après le premier rendu et à chaque changement des variables entre crochets....****

    // if (startBtn == 'ABANDONNER') {

    //     const Second = setTimeout(() => {
    //         if (second < 1) {
    //             setSecond(59)
    //         } else {
    //             setSecond(second - 1)
    //         }
    //         if (count < 1) {
    //             setSecond(0)

    //         }


    //     }, 1000)


    // const Minute = setTimeout(() => {
    //     setInputTime(inputTime - 1)
    //     setCount(count - 1)

    // }, 60000);


    // if (startBtn == 'LANCER') {
    //     document.getElementById('timeInput').disabled = false
    //     return (clearTimeout(Minute))
    // }
    // else if (startBtn == 'ABANDONNER') {
    //     return (document.getElementById('timeInput').disabled = true)
    // }

    // if (count == 0) {

    //     return (document.getElementById('score').style.display = "block", clearTimeout(Minute))

    // }
    // }
    // lorsque ces variables entre cochets changent la fonction useEffect sera appellée *****
    // }, [count, startBtn, second]);



    // const changeValue = () => {
    //     console.log(startBtn)
    //     if (startBtn == 'LANCER') {

    //         setStartBtn('ABANDONNER')
    //     }
    //     else if (startBtn == 'ABANDONNER') {

    //         setStartBtn('LANCER')
    //     }
    // }


    // Style 

    return (
        <Layout>
            <div className="BigTimerContainer">

                <div className="TimerContainer">

                    <div className="StatBar">
                        <p><img alt="XP image" src={Xplogo} /> 23 xp</p>
                        <p><img alt="Gemme image" src={GemmeLogo} /> {points}</p>
                        <p><img alt="Niveau image" src={NiveauLogo} /> niv 1</p>
                    </div>
                    <h1 style={{ fontFamily: "Montserrat Bold", fontSize: "48px", margin: "0", marginTop: "3vh" }}>Choisi ton temps !</h1>
                    <p>Tu as choisis un oeuf surprise, tu ne pourras découvrir son contenu qu’à la fin 1de ta séance...</p>
                    <div className="RoundBox" ><img className="HomeEgg" src={Home} />

                        <input
                            className="range"
                            min="0"
                            max="61"
                            step="1"
                            onChange={handleInputTimeChange}
                            id="timeInput"
                            type="range"
                            value={inputTime / 60}
                        />
                    </div>
                    {/* <div className="time"><h1>{count}:{second} min</h1></div> */}

                    {isTimerRunning ? time : inputTime / 60}

                    <button onClick={isTimerRunning ? stopTimer : startTimer}>
                        {isTimerRunning ? 'ABANDONNER' : 'LANCER'}
                    </button>

                    {/* <div style={{ display: 'none' }} id="score"><h1> Bravo ! tu as travaillé {count} et gagné {point} lingots</h1></div> */}

                    {hasWon && (
                        <>
                            <div className="PopUpBackground">
                            </div>

                            <div className="PopUpBox">
                                <div className="PopUpLayout">


                                    <div className="PopUpContent">
                                        <h2> Bravo !</h2>
                                        <img src={oeufPopUp} width="auto" height="100" alt="Logo" />
                                        <h3> TU AS FAIS ECLORE UN OEUF LINGOT</h3>
                                        <p> Tu as travaillé {totalTime} secondes et gagné {newPoints} lingots</p>
                                    </div>

                                </div>
                            </div>

                        </>
                    )}

                    
                </div>

            </div>
        </Layout>

    )


}

export default Timer