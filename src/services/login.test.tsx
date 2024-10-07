
import { login } from "./login";

/*
const mockSetIsLoggedIn = jest.fn() 
const mockNavigate = jest.fn()


jest.mock('react', () => ( {
    ...jest.requireActual('react'),
    useContext: () => ({
        //isLogedIn: false,
        setIsLoggedIn: mockSetIsLoggedIn    
    })
} ))
 

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))


*/

describe('login', () => { 
    /*const mockAlert = jest.fn()
    window.alert = mockAlert*/

    const mockEmail = 'leo@dio.bank'
    const mockPassword = '1234'

    it('deve mostrar mensagem de boas vindas caso o email seja valido', async ()=>{
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
        //expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        //expect(mockAlert).toBeCalledWith(`Bem vindo, ${mockEmail}!`)
        //expect(mockNavigate).toHaveBeenCalledWith('/1')
    })
     
/*    
    it('não deve exibir boas vindas sem o e-mail',async  ()=>{
        await login(mockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo, !`)
    }) 

*/  

    it('deve exibir um erro caso o email seja invalido', async ()=>{
        const response = await login('email@invalido.com', '123')
        expect(response).toBeFalsy()
        //expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        //expect(mockAlert).toHaveBeenCalledWith('Email Invalido.')
        //expect(mockNavigate).not.toHaveBeenCalled()
    }) 

})