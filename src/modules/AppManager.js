import { useCallback, useEffect, useState } from "react";
import AppContext from "../AppContext";

const getPointsByTime = (time) => {
    return time * 0.5
}

const AppManager = ({ children }) => {
    const [time, setTime] = useState(10 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [totalTime, setTotalTime] = useState(10 * 60)
    const [points, setPoints] = useState(0)
    const [hasWon, setHasWon] = useState(false)
    const [EggOne, setEggOne] = useState(false)
    const [EggTwo, setEggTwo] = useState(false)
    const [EggThree, setEggThree] = useState(false)

    const FirtTier = ((totalTime/60)/3)*3
    const SecondTier = ((totalTime/60)/3)*2
    const ThirdTier = ((totalTime/60)/3)
    
    useEffect(() => {
        
        if (SecondTier < time/60  && time/60<FirtTier) {
            setEggOne(true)
            setEggTwo(false)
            setEggThree(false)
         } 
        if (ThirdTier < time/60 && time/60< SecondTier) {
    
            setEggOne(false)
            setEggTwo(true)
            setEggThree(false)

        
        }
         if (0 < time/60 && time/60< ThirdTier) {
      
            setEggOne(false)
            setEggTwo(false)
            setEggThree(true)
        }
        if (!isRunning) {
            setEggOne(true)
            setEggTwo(false)
            setEggThree(false)
              
            return;
        }

        const timeout = setTimeout(() => {
            if (time === 0) {
                setIsRunning(false)
                setPoints(points + getPointsByTime(totalTime))
                setHasWon(true)
                return
            }

            setTime(time - 20)

        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [isRunning, points, time, totalTime]);

    useEffect(() => {
        // starting
       
        if (isRunning) {
            
            setHasWon(false)
            setTime(totalTime)
        }
    }, [isRunning, totalTime])

    const stopTimer = () => {
        setIsRunning(false);
        setIsFinished(true)
    }

    const contextValue = {
        EggOne,
        setHasWon,
        EggTwo,
        EggThree,
        time,
        setTime,
        startTimer: () => setIsRunning(true),
        stopTimer,
        isTimerRunning: isRunning,
        hasWon,
        newPoints: getPointsByTime(totalTime),
        totalTime,
        setTotalTime,
        setPoints,
        points,
        isFinished
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>

    )


}
export default AppManager