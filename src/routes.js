import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Crud from "./pages/Crud"

//Uma função AppRoutes com cinco rotas.
function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/admin" element={ <Admin /> }></Route>
                <Route path="/admin/crud" element={ <Crud /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;