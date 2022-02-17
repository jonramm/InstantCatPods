import { React, useEffect } from "react";
import { useState } from 'react';

function CosmeticInputOptions() {

    const [cosmetics, setCosmetics] = useState([])
    
    const loadCosmetics = async () => {
        const cosmetics = [{name: "Viking Horns"},
                      {name: "Gauntlets"}]
        {console.log(cosmetics)}
        for (const obj of cosmetics) {
            setCosmetics(arr => [...arr, obj])
        }
    }

    useEffect(() => {
        loadCosmetics();
    }, [])

    return (
        <>
            {cosmetics.map((cosmetic, i) => (<option>{cosmetic.name}</option>))}
        </>
    )
}

export default CosmeticInputOptions;