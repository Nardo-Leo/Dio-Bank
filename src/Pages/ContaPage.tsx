import {  Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo"
import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../components/AppContext"



interface UserData{
    email:string ,
    password:string ,
    name: string,
    balance:number,
    id: string
}


export const ContaPage = () => {
     const [userData, setUserData] = useState<null  | UserData>()
     const {id} = useParams()
     const navigate = useNavigate()

     const {isLoggedIn} = useContext(AppContext)
     

     !isLoggedIn && navigate('/')

    useEffect( () => {
        const getData = async () =>{
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    },[])

    const actualData = new Date()
    

    

    if(userData && id !== userData.id){
        navigate('/')
    }


    

   
    

    return(
        <>
            <Center >
                <SimpleGrid columns={2} spacing={8} marginTop={10} display='flex' flexDirection={{base:'column', md:'row'}}>


                    {
                        userData === undefined || userData === null ?
                        ( <Center> <Spinner color="whitesmoke" size='xl'></Spinner></Center>) :
                        (
                            <>
                            
                                <CardInfo 
                                    mainContent={`Bem vindo ${userData?.name}`} 
                                    content={`${actualData.getDate()} / ${actualData.getMonth()+1}  / 
                                    ${actualData.getFullYear()} ${actualData.toLocaleTimeString()} `} />

                                <CardInfo mainContent="Saldo" content={`R$ ${(userData.balance).toFixed(2)}`}/>

                               
                                
                            </>
                        )
                    }
                    
                    

                </SimpleGrid>
            </Center>
        </>
    )
}