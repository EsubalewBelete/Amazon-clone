import React, {useContext, useState} from 'react'
// import LayOut from '../../Component/LayOut/LayOut.jsx'
import { Link, useNavigate } from 'react-router-dom'
import classes from "./SignUp.module.css"
import { auth } from '../../Utility/firebase.js'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../Component/DataProvider/DataProvider.jsx"
import { Type } from '../../Utility/action.type.js'
import {ClipLoader} from "react-spinners"


function Auth() {

      
   const [{user}, dispatch] = useContext(DataContext)
   const navigate=useNavigate()
  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const [Loading, setLoading] = useState({
    signIn: false,
    signUP:false
  })
  const authHnadler=(e)=>{
    e.preventDefault()
    
    if(e.target.name==='signIn'){
      setLoading({...Loading,  signIn:true})
         signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          })
          setLoading({...Loading, signIn:false})
          navigate('/')
         }).catch((err)=>{seterror(err.message)
          setLoading({...Loading, signIn:false})
         }
        ) 
    }else{
      setLoading({...Loading, signUP:true})
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({...Loading, signUP:false})
        navigate('/')
      }).catch((err)=>{seterror(err.message)
        setLoading({...Loading, signUP:false})
      })
    }
  }
 
  return (
    <section className={classes.login}>
{/* logo */}
<Link to={'/'}>
<img  src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"} alt="" />
</Link>
{/* form */}
<div className={classes.login__container}>
  <h1>Sign In</h1>
  <form action="">
    <div >
      <label htmlFor="email">Email</label>
      <input   value={email}  onChange={(e)=>setemail(e.target.value)} type="email" id='email' />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input  value={password} onChange={(e)=>setpassword(e.target.value)} type="password" id='password' />
    </div>
    <button name='signIn' type='submit' onClick={authHnadler} className={classes.login__signInButton}>
      {
        Loading.signIn?(<ClipLoader color='#000' size={15}/>):("signIn")
      }
    </button>
  </form>
  {/* --agreement-- */}
  <p>
    By signing-in you agree to the AMAZON FAKE CLONE Conditons of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
  </p>
  {/* create account btn */}
  <button name='signUP' type='submit' onClick={authHnadler} className={classes.login__register}>

    {
      Loading.signUP?(<ClipLoader color='#000' size={15}/>):("Create your Amazon Account")
    }
  </button>
  {
    error && <small style={{paddingTop: '5px',  color: 'red'}}>{error}</small>
  }
</div>
    </section>
    
  )
}

export default Auth