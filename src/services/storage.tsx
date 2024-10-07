interface IDioBank{
    login: boolean
    email: string
    password: string
}

const diobank = {
    login: false,
    email: '',
    password: ''

}

export const getAllLocalStorage = ():string  | null =>{

    return localStorage.getItem('diobank')
}


export const createLocalStorage = ():void =>{
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (diobank: IDioBank):void =>{

    localStorage.setItem('diobank', JSON.stringify(diobank))
}