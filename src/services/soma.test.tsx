import { soma, multiplica} from './soma'

describe('soma', () => {
    it('deve somar 1 ao numero informado', () =>{
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o numero por 2', ()=>{
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })

    it('deve multiplicar o numero por 3', () => {
        const value = multiplica(2,3)
        expect(value).toBe(6)
    })

    it('deve informar um erro caso o multiplicador seja diferente de 2 ou 3', () => {
        const value = multiplica (2,5)
        expect(value).toBe('Multiplicador não aceito')
    })
})