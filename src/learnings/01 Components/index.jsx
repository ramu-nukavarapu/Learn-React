// A component is a function which returns HTML
// Components can be created in two ways functional and class
// Using functional components are recommended.

export function Greeting() {
    return <h1>Hello User</h1>;
}


const name = "Ramu";

// This is where jsx comes in!
// You can access javascript variables inside html using {}
// It accepts variables, functions, expressions and ternary operator.

export function GreetUser() {
    return <h1>Hello {name}!</h1>;
}


let a = 5, b = 10;
export function Sum() {
    return <h1>{a}+{b} ={a+b}</h1>
}


// Using ternary operators, we can do conditional rendering
let isLogged = true;

export function UserLogin(){
    return(
        <h1>{isLogged? "Login Successfully.": "Please Login"}</h1>
    );
}