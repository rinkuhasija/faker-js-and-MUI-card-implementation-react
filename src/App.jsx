import { useState } from 'react'
import './App.css'
import { USERS } from './components/FakerData/FakerData'
import MUICard from './components/MUICard/MUICard'

function App() {
  const [users, setUsers] = useState(USERS)
  console.log(users)

  return (
    <div className='topmost-container'>
      <h1 className='h1'> All Doctors</h1> <br />
      <div className='container'>
        {users ? users.map((user) => {
          return (
            <div className='oneCard'  key={user.userId}>
              <MUICard user={user} />
            </div>)
        }) : <h1>No Users</h1>}

      </div>
    </div>
  )
}

export default App
