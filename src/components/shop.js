
import React, { useState, useEffect } from "react";

import ReactDOM from 'react-dom';

function Shop() {

    const [wallet, setWallet] = useState(50)
    const [price, setPrice] = useState(20)

    const Buy = (event) => {

      
            if (wallet >= price) {
                setWallet(wallet - price)

            }

            if (wallet <= price) {
                return(document.getElementById('article').disabled = true)

            }

        



    }



    return (

        <div>
            <h1>Mes lingots : {wallet}</h1>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71FqRm8FR4L.jpg"></img>
            <h1>Lingots d'or</h1>
            <button id="article" onClick={Buy} value={price} >Acheter</button>

        </div>
    )

}

export default Shop