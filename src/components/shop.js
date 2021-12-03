
import React, { useState, useEffect, useContext } from "react";
import lingot from '../img/oeufLingot.png';
import xp from '../img/oeufXp.png';
import level from '../img/oeufLevel.png';
import Layout from "./Layout";
import AppContext from "../AppContext";
import GemmeLogo from '../img/GemmeLogo.png';

function Shop() {

    const {
        
      
        setPoints,
        points,
      


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
                    <div className="Banderole"><h1>Boutique</h1></div>
                    <div className="ShopPoint">   <p><img alt="Gemme image" src={GemmeLogo} /> {points}</p></div>

                    <div className="EggsContainer">
                        <div className="Oeuf lingot">
                            <img src={lingot} width="auto" height="100" alt="Logo" />
                            <p>Lingots d'or</p>
                            <p><img alt="Gemme image" src={GemmeLogo} />20 </p>
                            <button id="articleLingot" onClick={BuyLingot} value={priceLingot} >Acheter</button>
                        </div>

                        <div className="Oeuf xp">
                            <img src={xp} width="auto" height="100" alt="Logo" />
                            <p>Xp au top</p>
                            <p><img alt="Gemme image" src={GemmeLogo} />40 </p>
                            <button id="articleXp" onClick={BuyXp} value={priceXp} >Acheter</button>
                        </div>

                        <div className="Oeuf level">
                            <img src={level} width="auto" height="100" alt="Logo" />
                            <p>Level up</p>
                            <p><img alt="Gemme image" src={GemmeLogo} />60 </p>
                            <button id="articleLevel" onClick={BuyLevel} value={priceLevel} >Acheter</button>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )

}

export default Shop