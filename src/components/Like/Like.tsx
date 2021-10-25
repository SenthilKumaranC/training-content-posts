import React, { useCallback, useState } from "react";
import './Like.css'

const Like = () => {

    const [totalLikes, setTotalLikes] = useState<number>(20);

    const [buttonState, setButtonState] = useState<string>("unlike");

    const toggleButtonState = useCallback(() => {
        const newButtonState = buttonState === "unlike" ? "like" : "unlike";
        setButtonState(newButtonState);
        newButtonState === "like" ? setTotalLikes(totalLikes - 1) : setTotalLikes(totalLikes + 1);
    }, [buttonState, totalLikes])

    return <>
        <button onClick={toggleButtonState}>{buttonState}</button>
        <div className="TotalLikes">{totalLikes}</div>
    </>
}

export default Like;