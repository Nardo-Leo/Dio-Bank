import { Center } from "@chakra-ui/react"
import { Butao } from "../components/Butao"
import { Form } from "../components/Form"
import { Label } from "../components/Label"
import { login } from "../services/login"
import {useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { changeLocalStorage, getAllLocalStorage } from "../services/storage"
import { Acess } from "../components/Acess"





export const LoginPage = () => {

    

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()



    const validadeUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Email ou Senha Incorretos, tente novamente!')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true, email, password })
        navigate('/ContaPage/1')

    }

    


    const directLogin = () =>{

        /* Caso o usuario não tenha feito logout e os dados ainda estão salvou no localStorage, ao acessar a pagina de login
        ele será redirecionado para pagina da sua conta automaticamento */
        
        const local = getAllLocalStorage() || ''
        const obj = JSON.parse(local)

        if(obj.login == true){
            navigate('ContaPage/1')
           
        }
        
        return ''
    }





    return (
        <>

        {directLogin()}
            <Form >
                <Center fontSize={40} fontFamily={"inherit"}>Login</Center>
                <Label
                    name='Email:'
                    htmlFor='email'
                    placeholder='Digita teu email cara!'
                    type='e-mail'
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                ></Label>

                <Label
                    name='Senha'
                    htmlFor='senha'
                    placeholder='Digita tua senha cara!'
                    type='password'
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}


                ></Label>

                <Butao onClick={() => validadeUser(email, password)}></Butao>
            </Form>

            <Acess />
        </>
    )
}