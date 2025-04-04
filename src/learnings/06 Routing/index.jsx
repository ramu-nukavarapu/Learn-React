import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function Signup() {
    return <div>
        username - <input type="text" />
        <br />
        email - <input type="email" />
        <br />
        password - <input type="password" />
        <br />
        <button type="submit">Sign Up</button>
    </div>
}

export function Signin() {
    return <div>
        email - <input type="email" />
        <br />
        password - <input type="password" />
        <br />
        <button type="submit">Sign In</button>
    </div>
}

// Routing is usually done BrowserRouter component in react, it takes routes and route components
// Route component has props path and element to handle the routes
// these routes can be triggered by link element with attribute 'to' and useNavigate hook
export function Routing(){
    return (<Router>
        <Routes>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
    </Router>)
}

