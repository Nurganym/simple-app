import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__content__logo">Spoon</h1>
        <nav className={`${'header__content__nav'} ${menuOpen ? 'menu' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/login">Sign in</Link>
            </li>
          </ul>
          <button>
            <Link to="/profile">Profile</Link>
          </button>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <MenuIcon onClick={menuToggleHandler} />
          ) : (
            <CloseIcon onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
