import React, { useCallback, useState } from "react";
import './Like.css'

const Like = () => {

    const [totalLikes, setTotalLikes] = useState<number>(20);

    const [buttonState, setButtonState] = useState<string>("unlike");

    const toggleButtonState = useCallback(() => {
        //Toggling
        const newButtonState = buttonState === "unlike" ? "like" : "unlike";

        //Handle Like Count
        if (newButtonState === "like") {
            setTotalLikes(totalLikes - 1);
        } else {
            setTotalLikes(totalLikes + 1);
        }

        //Set Button State
        setButtonState(newButtonState);
        
    }, [buttonState, totalLikes])

    return <>
        <button onClick={toggleButtonState}>{buttonState}</button>
        <div className="TotalLikes">{totalLikes}</div>
    </>
}

export default Like;