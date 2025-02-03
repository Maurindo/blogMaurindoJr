import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"

//Uma função AppRoutes com cinco rotas.
export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}