import { api } from "../api"
import { useContext } from "react"
import { AppContext, } from "../components/AppContext"
import { useNavigate } from "react-router-dom"

export const login = async (email: string, password: string): Promise<boolean> => {

    /* const { setIsLoggedIn } = useContext(AppContext)
     //console.log(setIsLoggedIn)
     
 
     const navigate = useNavigate() 
     */

    const data: any = await api

    //console.log(data.id)
/*
    if(password !== data.password){
        alert('Senha incorreta, tente novamente')
        console.log('senha: ', data.password)
        return false

    }

    */


    if ((email !== data.email)||(password !== data.password) ) {
        /* setIsLoggedIn(true)
         //alert(`Bem vindo, ${email}!`) 
         navigate(`/${data.id}`)*/
        /*alert('Email incorreto, tente novamente')
        console.log('email: ', data.password)*/
        return false
    } 

    return true
    


    /*
        setIsLoggedIn(true) 
        navigate(`/${data.id}`)
    */


}