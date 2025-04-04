import './App.css'
import { Greeting, GreetUser, Sum, UserLogin } from './learnings/01 Components'
import { Incrementer } from './learnings/02 States'
import { GreetUserWithName } from './learnings/03 Props'
import { UserDetails, UserDetailsValidation, UserDetailsValidationByProps } from './learnings/04 Array Rendering'
import { IncrementByOne } from './learnings/05 UseEffect Hook'
import { Signin, Signup } from './learnings/06 Routing'
import { Routing } from './learnings/06 Routing'

function App() {

  return (
    <>
      <Routing />     
      {/* <Incrementer /> */}
      <Greeting />
      <GreetUser />
      <Sum />
      <UserLogin />
      <GreetUserWithName name={"Ramu Nukavarapu"}/>
      <UserDetails />
      <UserDetailsValidation />
      <UserDetailsValidationByProps />
      {/* <IncrementByOne /> */}
      
    </>
  )
}

export default App
