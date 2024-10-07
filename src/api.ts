const conta = {
    email: 'leo@dio.bank',
    password: '1234',
    name: 'Leo Silva',
    balance: 1100.00,
    id: '1'

}

export const api = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(conta)
    }, 3000)
})