export default function generatePass(){
    let password: string = ''
    let characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*()_+-/.,:;^[]{}'
    let passwordLenght = 10

    for(let index = 0; index < passwordLenght; index++){
        password+= characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}