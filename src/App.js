import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Shop from "./components/Shop"
import Timer from "./components/Timer"
import AppManager from "./modules/AppManager";

const App = () => {
    return (
        <AppManager>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Timer />} />
                        <Route path="/shop" element={<Shop />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AppManager>
    )

}

export default App