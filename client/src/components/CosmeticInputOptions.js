import { React, useEffect } from "react";
import { useState } from 'react';

function CosmeticInputOptions() {

    const [cosmetics, setCosmetics] = useState([])
    
    const loadCosmetics = async () => {
        const response = await fetch('/retrieve/cosmetics');
        const data = await response.json();
        setCosmetics(data)
    }

    useEffect(() => {
        loadCosmetics();
    }, [])

    return (
        <>
            {cosmetics.map((cosmetic, i) => (<option>{cosmetic.description}</option>))}
        </>
    )
}

export default CosmeticInputOptions;