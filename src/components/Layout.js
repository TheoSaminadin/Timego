import TimerLogo from '../img/TimerLogo.png';
import ShopLogo from '../img/ShopLogo.png';
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <div className="Menu">

                        <Link to="/"> <img alt="Timer Logo" src={TimerLogo} /></Link>
                        <Link to="/shop"> <img alt="Shop Logo" src={ShopLogo} /></Link>

                    </div>
        </div>
    )
}


export default Layout