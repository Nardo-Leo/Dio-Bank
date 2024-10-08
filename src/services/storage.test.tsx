import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"



const diobank = {
    login: false,
    email: '',
    password: ''
}


describe('storage', ()=>{

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    
    it('Deve retornar o localStorage', ()=>{
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar objeto no localStorage', ()=>{
       
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

    it('Deve alterar o valor do localStorage', ()=>{
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

})