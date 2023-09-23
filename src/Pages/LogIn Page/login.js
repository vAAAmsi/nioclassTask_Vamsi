
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'

import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import Swal from 'sweetalert2'

const LogIn = () => {
  const [name, setName] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const singnUp_for_text = async (e) => {
    e.preventDefault();
     sessionStorage.setItem('name',name)
     Swal.fire({
      icon:'success',
      title:'successfully logged in !!',
      text : 'Welcome !!'
    })
    navigate('/landingpage')
  }
  
  return (
    <div className={styles.container}>
        <form className={styles.form}  onSubmit={singnUp_for_text}>

            <div className={styles.text}>Login to Select the questions</div>
            <center className={styles.email}>
                <TextField label='name' type='text' value={name}
                 onChange={(e) => setName(e.target.value)} required/>
            </center>

            <center className={styles.password}>
                <TextField  label='Password' type='password' value={password}
                 onChange={(e) => setPassword(e.target.value)} required/>
            </center>

            <center className={styles.btn}>
                 <Button type='submit' style={{color:'white',backgroundColor:'green'}} >login </Button>
            </center>
            
        </form>
    </div>
  )
}

export default LogIn;