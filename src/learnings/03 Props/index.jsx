// props is way to send data / information to a component. 
// It is similar to parameters that usually send state of a variable to child components.

export function GreetUserWithName(props) {
    return (
        <>
            <GreetMessage />
            <UserName name={props.name}/>
        </>
    );
}


export function GreetMessage() {
    return <h1>Welcome Back,</h1>
}

export function UserName(props){
    return <h1>{props.name}!</h1>
}