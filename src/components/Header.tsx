
import { Box, Button, Center, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { Link, useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../services/storage"
import {  HamburgerIcon } from "@chakra-ui/icons"

export const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({ login: false, email: '', password: '' })
        setIsLoggedIn(false)
        navigate('/')

    }





    return (

        <Flex
            bg='tomato'
            height='13vh'
            padding='5px'
            color='white'
            fontSize='2.5em'
            display='flex'
            alignContent='center'
        >


            <Center>
                <h1>Dio Bank</h1>
            </Center>





            {
                isLoggedIn && (
                    <>
                        <Spacer />

                            <Center display={{base:'none', md:'block'}} >
                                <Flex >
                                    <Box marginRight='15px'>
                                        <Link to='/ContaInfoPage'>
                                            <Button>Conta</Button>
                                        </Link>
                                    </Box>

                                    <Box marginRight='15px'>
                                        <Link to='/ContaPage/1'>
                                            <Button bg='whitesmoke'>Saldo</Button>
                                        </Link>
                                    </Box>




                                    <Box>
                                        <Button onClick={() => logout()}>Logout</Button>
                                    </Box>


                                </Flex>
                            </Center>
                       

                       

                            <Center  >

                            <Menu  >
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                    display={{ md: 'none', base:'block' }}
                                    
                                />
                                <MenuList   bg='tomato' border='none' padding='0px' margin='0px' width='10px'>
                                    <MenuItem justifyContent='end' bg='none'>
                                        <Box width='100%' margin='0px' padding='0px'>
                                            <Link to='/ContaInfoPage' >
                                                <Button bg='#9413dc' width='100%' color='white' >Conta</Button>
                                            </Link>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem justifyContent='end' bg='none' >
                                        <Box width='100%' margin='0px' padding='0px'>
                                            <Link to='/ContaPage/1'>
                                                <Button bg='#9413dc'  width='100%' color='white'>Saldo</Button>
                                            </Link>
                                        </Box>
                                    </MenuItem>

                                    <MenuItem justifyContent='end' bg='none' >
                                        <Box width='100%' margin='0px' padding='0px'>
                                        <Button width='100%' onClick={() => logout()}>Logout</Button>
                                        </Box>
                                    </MenuItem>
                                </MenuList>
                            </Menu>


                        </Center>

                       




                    </>
                )
            }

        </Flex>
    )
}