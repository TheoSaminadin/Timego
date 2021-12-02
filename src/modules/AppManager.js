import { useCallback, useEffect, useState } from "react";
import AppContext from "../AppContext";

const getPointsByTime = (time) => {
    return time * 0.5
}

const AppManager = ({ children }) => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [isGivenUp, setIsGivenUp] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
    const [points, setPoints] = useState(0)
    const [hasWon, setHasWon] = useState(false)

    useEffect(() => {
        if (!isRunning) {
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