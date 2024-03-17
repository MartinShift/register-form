import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm' 
import AuthenticatedPage from './components/AuthenticatedPage' 

function App() {

  const [user, setUser] = useState(null)

  return (
    user === null ? <RegistrationForm setUser={setUser} /> : <AuthenticatedPage user={user} />
  )
}

export default App;