import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./Pages/LoginPage"
import { ContaPage } from "./Pages/ContaPage"
import { ContaInfoPage } from "./Pages/ContaInfoPage"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"

export const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/conta' element={<h1>Essa conta</h1>} />
            
            <Route path='/contaPage/:id' element={ isLoggedIn? <ContaPage/> : <LoginPage/>} />
            
            <Route path='/contaInfoPage' element={ isLoggedIn?  < ContaInfoPage /> : <LoginPage/>} />
        </Routes> 
    )
}