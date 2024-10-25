import { useState, useEffect, useContext } from 'react'
import { auth } from './Utility/firebase.js'
import { DataContext } from './Component/DataProvider/DataProvider.jsx'

import Routing from './Routing.jsx'
import { Type } from './Utility/action.type.js'
function App() {
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(() => {
    
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
     
      dispatch({
        type: Type.SET_USER,
        user:authUser
      })
    }else{
      dispatch({
        type:Type.SET_USER,
        user: null
      })
    }
  })
    
  }, [dispatch])
  

  return (
    <Routing/>
  )
}

export default App
