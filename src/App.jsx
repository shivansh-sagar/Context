
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider.'


function App() {


  return (
    <UserContextProvider>
     <div className='w-full flex flex-col items-center justify-center h-screen bg-slate-400'>
      <Login />
     <Profile/>
     </div>
     
    </UserContextProvider>
  )
}

export default App
