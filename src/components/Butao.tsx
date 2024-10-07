import { Center, Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"



interface IButao{
onClick:  MouseEventHandler
}

export const Butao = ({onClick}:IButao) =>{
    return(
        <>
            <Center>
                <Button bg='green'
                    width='150px'
                    onClick={onClick}
                    marginTop='20px'
                    height='60px'
                    borderRadius='25px'
                    alignContent='center'
                    textAlign='center'
                    color='whitesmoke'
                    fontSize='2em'
                    fontFamily={"monospace"}>
                        <p>ENTRAR</p></Button>
            </Center>

        </>
    )

}