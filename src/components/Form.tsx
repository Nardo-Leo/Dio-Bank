import { Box, Center} from "@chakra-ui/react"


/*
interface IForm{
    title:string
}
*/


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