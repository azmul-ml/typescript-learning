//unknown

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'

if(typeof userInput === 'string'){
    userName = userInput
}


//never

function generateError (message: string, code: number): never {
    throw {message: message, errorCode: code}
}
const resultError = generateError('An Error Occured!', 500)
console.log(resultError);
generateError('An Error Occured!', 500);
