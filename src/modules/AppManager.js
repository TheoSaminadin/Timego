import { useEffect, useState } from "react";
import AppContext from "../AppContext";

const AppManager = ({ children }) => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [pointsToWin, setPointsToWin] = useState(0)
    const [points, setPoints] = useState(0)
    const [hasWon, setHasWon] = useState(false)


    useEffect(() => {
        if (!isRunning) {
            setPointsToWin(time * 0,5)
            return;
        }

        setTimeout(() => {
            setTime(time - 1)

            if (time <= 1) {
                // Finishing
                setIsRunning(false)
                setPoints(points + pointsToWin)
                setHasWon(true)
            }
        }, 1000)
    }, [isRunning, time]);

    useEffect(() => {
        setHasWon(false)
    }, [isRunning])

    const contextValue = {
        time,
        setTime,
        startTimer: () => setIsRunning(true),
        isTimerRunning: isRunning,
        hasWon,
        pointsToWin
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>

    )

}

export default AppManager