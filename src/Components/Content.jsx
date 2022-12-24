import React from 'react'
import style from './content.module.css'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import Series from './Series'
// import Series from './Series'

const Content = () => {
    const navi= useNavigate()

    const series=(e)=>{
        
        navi('/series')
    }
  return (
      < >
      
        <div className={style.popular}>
            <h2 className={style.h2}> Popular Titles</h2>
        </div>
        <div className={style.content}>

        <div className={style.content1}>

            <Link to="/series">
            <div className={style.series}>
                Series
            </div>
            Popular Series
            </Link>
        </div>
        <div>
            
            <Link to="/movies">
            <div className={style.movies}>
                Movies
            </div>
            <p className={style.p}>Popular Movies</p>
            </Link>
        </div>
        </div>
            
        </>
  )
}

export default Content