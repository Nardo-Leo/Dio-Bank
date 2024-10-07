import { useState } from "react";
import { ChakraProvider, Box, Center } from "@chakra-ui/react";


export const UseStateEx = () => {

    
const [value, setValue] = useState(0)
const [outroValor, setOutroValor] = useState(0)

    return(
        

        <ChakraProvider>
            <Center>
                <Box fontSize={24}>
                    <button onClick={() =>setValue(value+1)}>Somar mais 1 ao Value</button>
                    <p>{value}</p>

                    <button onClick={() =>setOutroValor(outroValor+2)}>Somar mais 2 ao outroValor</button>
                    <p>{outroValor}</p>
                </Box>
            </Center>
        </ChakraProvider>
        )
}