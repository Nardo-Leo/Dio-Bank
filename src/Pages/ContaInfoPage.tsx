import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import {  useNavigate } from "react-router-dom"
import { getAllLocalStorage } from "../services/storage"
import { api } from "../api"
import { useEffect, useState } from "react"




interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

export const ContaInfoPage = () => {

    const local = getAllLocalStorage() || ''
    const localObj = JSON.parse(local)

    const navigate = useNavigate()

    if (!localObj.login) {
        navigate('/')
    }


    const [userData, setUserData] = useState<any | UserData>()

    useEffect(() => {

        const apiName = async () => {
            const data: any = await api
            /*console.log('tipo de  data: ' + typeof(data))
            console.log(data.name)*/
            setUserData(data)

            //return data.name

        }

        /*const data = */ apiName()

        



    }, [])











    return (
        <>
        <Center>
          
            
           <Box >
                <Text fontSize='2xl' fontWeight='bold' color='white' margin='15px 0px 30px 0px'>
                    Informações da Conta
                </Text>



                {
                    userData === undefined || userData === null ?
                        (<Spinner color="whitesmoke" size='xl'></Spinner>) :
                        (
                            <>
                                <Text color='whitesmoke' fontSize='1.3em' fontWeight='bolder'>
                                    Email cadastrado:   {' ' + userData?.email}
                                    
                                   
                                </Text>
                                <Text color='whitesmoke' fontSize='1.3em' fontWeight='bolder'>
                                    Nome: {' ' + userData?.name}
                                    
                                </Text>



                            </>
                        )
                }

            </Box>
           
           
           </Center>
        </>
    )
}