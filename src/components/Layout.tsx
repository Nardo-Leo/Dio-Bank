import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({children} : any) => {
    return(
        <>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='0px'>
                <Header />
                {children}
                {/* <Footer /> */}

 
             </Box>

        
        </>
    )
}