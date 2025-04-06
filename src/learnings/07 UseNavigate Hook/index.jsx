import { useNavigate } from "react-router-dom"

 export function Navigation() {
    const navigate = useNavigate()
    
    return (<div>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>)
 }