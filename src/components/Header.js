import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return(
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <Link to='/news'>Новости</Link>
          </li>
        </ul>
        <div className="logo">
        <h1>Spoon</h1>
        </div>

       <div className="right">
         <div className="search">
           <SearchOutlined className="search-icons" />
           <button className="sch-btn">Search</button>
         </div>
         <div className="right-buttons">
           <button>
             <Link to='/login'>Войти</Link>
           </button>
           <button>
             <Link to='/signUp'>Зарегистрироваться</Link>
           </button>
           <button className="profile-btn">
             <Link to='/profile'>Профиль</Link>
           </button>
         </div>
       </div>
      </nav>

    </div>
  )
}
export default Header