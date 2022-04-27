import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.scss'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const [errorData, setErrorData] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  useEffect(() => {
    setIsSubmited(isSubmited)
  }, [])

  //download data from profile and to save in localStorage
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://3378e805-87c9-422d-82ff-8e01cd66ac98.mock.pstmn.io/v1/profile'
      )
      localStorage.setItem('getdata', JSON.stringify(result.data))
    }
    fetchData()
  }, [])

  //Errors
  const errors = {
    uname: 'Имя пользователя введены неверно',
    pass: 'Неверный пароль',
  }

  //localStorage
  useEffect(() => {
    localStorage.setItem('isSubmited', isSubmited)
  }, [isSubmited])

  const changeHandlerUser = (e) => {
    setUsername(e.target.value)
  }
  const changeHandlerPass = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const getData = JSON.parse(localStorage.getItem('getdata'))

    getData.data.filter((userData) => {
      if (username === userData.username) {
        if (password === userData.password) {
          localStorage.setItem('currentdata', JSON.stringify(userData))
          setTimeout(() => {
            setIsSubmited(true)
            navigate('/profile')
          })
        } else {
          setIsSubmited(false)
          setErrorData(errors.pass)
        }
      } else {
        setErrorData(errors.uname)
        setIsSubmited(false)
      }
    })
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Имя пользователя</label>
        <input
          type="text"
          placeholder="name"
          value={username}
          onChange={changeHandlerUser}
          required
        />
        <label htmlFor="">Пароль</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={changeHandlerPass}
          required
        />
        <div>
          <button type="submit">Войти</button>
          {!!errorData && <div>{errorData}</div>}
        </div>
      </form>
    </div>
  )
}

export default Login
