// We know how to render single elements and js variables into the front end using jsx.
// But, what if we need to render a group of elements of size variable length?
// This is where js comes in, as we know, we can run js in jsx using {}
// To render a group of elements, we can use higher order functions available in js.

import { useState } from "react";

export function UserDetails(){
    const [users, setUsers] = useState([
        {
            name: "ramu",
            age: 21,
        },
        {
            name: "sai",
            age: 25,
        }
    ])

    return <div>
        {users.map((user)=>{
            return <div>
                {user.name}
                <br />
                {user.age}
                <br />
                <hr />
            </div>
        })}
    </div>
}


// we can also render based on conditions
export function UserDetailsValidation(){
    const [users, setUsers] = useState([
        {
            name: "kiran",
            age: 16,
        },
        {
            name: "ravi",
            age: 17,
        },
        {
            name: "ramu",
            age: 21,
        },
        {
            name: "sai",
            age: 25,
        }
    ])

    return <div>
        <h2>Valid Users:</h2>
        {users.map((user)=>{
            if(user.age > 18){
                return <div>
                    {user.name}
                    <br />
                    {user.age}
                    <br />
                    <hr />
                </div>
            }
        })}

        <h2>InValid Users:</h2>
        {users.map((user)=>{
            if(user.age < 18){
                return <div>
                    {user.name}
                    <br />
                    {user.age}
                    <br />
                    <hr />
                </div>
            }
        })}
    </div>
}


export function UserDetailsValidationByProps(){
    const [users, setUsers] = useState([
        {
            name: "kiran",
            age: 16,
        },
        {
            name: "ravi",
            age: 17,
        },
        {
            name: "ramu",
            age: 21,
        },
        {
            name: "sai",
            age: 25,
        }
    ])

    return <div>
        <h2>Valid Users:</h2>
        {users.map((user)=>{
            if(user.age > 18){
                return <User name={user.name} age={user.age}/>
            }
        })}

        <h2>InValid Users:</h2>
        {users.map((user)=>{
            if(user.age < 18){
                return <User name={user.name} age={user.age}/>
            }
        })}
    </div>
}

export function User(props) {
    return <div>
        {props.name}
        <br />
        {props.age}
        <br />
        <hr />
    </div>
}

