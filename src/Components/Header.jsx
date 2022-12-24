import React from 'react'
import style from './header.module.css'

export const Header = () => {
  return (
    <div>

    <div className={style.nav}>

        <h1 className={style.h1}>DEMO Streaming</h1>
        <div>

        <a href="/" className={style.login}>Login</a>
        <button className={style.start}>Start your trial</button>
        </div>
        
    </div>
    </div>
  )
}
