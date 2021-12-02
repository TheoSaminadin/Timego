
import React, { useState, useEffect, useContext } from "react";
import lingot from '../img/oeufLingot.png';
import xp from '../img/oeufXp.png';
import level from '../img/oeufLevel.png';
import Layout from "./Layout";
import AppContext from "../AppContext";
import Banderole from "../img/Banderole.png"


function Shop() {

    const {
       
        newPoints,
        setPoints,
        points,
        hasWon
        

    } = useContext(AppContext);

    const [wallet, setWallet] = useState(points);
    const [spent, setSpent] = useState(0)

    const [priceLingot, setPriceLingot] = useState(20)
    const [priceXp, setPriceXp] = useState(40)
    const [priceLevel, setPriceLevel] = useState(60)

    
    useEffect(() => {
        setPoints(wallet)
    }, [wallet])

    const BuyLingot = (event) => {
        if (wallet >= priceLingot) {
            setWallet(wallet - priceLingot)
        }
        else {
            return (document.getElementById('articleLingot').disabled = true)
        }

    }

    const BuyXp = (event) => {
        if (wallet >= priceXp) {
            setWallet(wallet - priceXp)
        }
        else {
            return (document.getElementById('articleXp').disabled = true)
        }


    }

    const BuyLevel = (event) => {
        if (wallet >= priceLevel) {
            setWallet(wallet - priceLevel)
        }
        else {
            return (document.getElementById('articleLevel').disabled = true)
        }
    }



    /*
     if (wallet >= priceLevel) {
        setSpent(wallet - priceLevel)

    }
    */





    /*
    
   else if (wallet >= priceLevel) {
        return (document.getElementById('articleLevel').disabled = true)


    }

*/






    return (
        <Layout>

            <div className="BigShopContainer">
                <div className="ShopContainer">
                <img src={Banderole} width="auto" height="100" alt="Banderole" />
                    <div className="ShopPoint"> <h1>Mes lingots : {points}</h1></div>

                    <div className="EggsContainer">
                        <div class="Oeuf lingot">
                            <img src={lingot} width="auto" height="100" alt="Logo" />
                            <p>Lingots d'or</p>
                            <p>20 lingots</p>
                            <button id="articleLingot" onClick={BuyLingot} value={priceLingot} >Acheter</button>
                        </div>

                        <div class="Oeuf xp">
                            <img src={xp} width="auto" height="100" alt="Logo" />
                            <p>Xp au top</p>
                            <p>40 lingots</p>
                            <button id="articleXp" onClick={BuyXp} value={priceXp} >Acheter</button>
                        </div>

                        <div class="Oeuf level">
                            <img src={level} width="auto" height="100" alt="Logo" />
                            <p>Level up</p>
                            <p>60 lingots</p>
                            <button id="articleLevel" onClick={BuyLevel} value={priceLevel} >Acheter</button>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )

}

export default Shop