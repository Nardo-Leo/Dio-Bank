import { Box, Text } from "@chakra-ui/react"

interface ICardInfo  {
    mainContent: string,
    content:string
}





export const CardInfo = ({mainContent, content}:ICardInfo) => {
    return(
        <>

            <Box 
                bg='whitesmoke' 
                minHeight='150px' 
                padding={8}
                borderRadius='25px'>
                   
               <Text fontSize='2xl' fontWeight='bold'>{mainContent}!</Text>
               <Text fontSize='xl' >{content}</Text>
                                
           </Box>

        </>
    )
}