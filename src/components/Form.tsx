import { ChakraProvider,Box, Center, Input } from "@chakra-ui/react"
import { Butao } from "./Butao"
import { login } from "../services/login"
import {useState, useEffect} from 'react'
import { Label } from "./Label"
import {api} from '../api'


interface IForm{
    title:string
}



export const Form = ( {children}:any) => {


   
    
    return(
        
        <Center marginTop={50}>
            <Box bg='whitesmoke' width='450px' borderRadius={25} padding={25} >
                
                {/*A segir vemos como fazer uma renderização condicional */}                        
                   {/*

                        
                        {userData==null || userData == undefined ? 
                            <p>Carregando...</p> : 
                                <p>{userData.name}</p>} 
                    */} 
                        
                {children}   

                
                
            </Box>
            
            </Center>
       
    )
}