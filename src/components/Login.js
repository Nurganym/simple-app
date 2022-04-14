import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.scss';


const Login = () => {

    const navigate = useNavigate();

    const [errorData, setErrorData] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmited, setIsSubmited] = useState(false);

    useEffect(() => {
        setIsSubmited(isSubmited);
    }, [])
  
    //User Login Info
    const database = [
        {
            username: 'admin',
            password: '12345'
        },

    ];

    //Errors
    const errors = {
        uname: 'Имя пользователя введены неверно',
        pass: 'Неверный пароль'
    };

    //localStorage
    useEffect(() => {
        localStorage.setItem('isSubmited', isSubmited);
    }, [isSubmited])


    const changeHandlerUser = e => {
        setUsername(e.target.value)
    };
    const changeHandlerPass = e => {
        setPassword(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        for(let i = 0; i < database.length; i++) {
            console.log('username:', username, database[i].username);
            console.log('password:', password, database[i].password);
            if(username === database[i].username) {
                if(password === database[i].password) {
                    setIsSubmited(true);
                    setTimeout(() => {
                        navigate("/profile");
                    }); 
                } else {
                    setIsSubmited(false);
                    setErrorData(errors.pass);
                }
            } else {
                setErrorData(errors.uname);
                setIsSubmited(false);
            }
        }
    
    };


    return(
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
};

export default Login