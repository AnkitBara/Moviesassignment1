import React from 'react'
import { useEffect,useState } from 'react'
import { Header } from './Header'
import style from './content.module.css'
import Error from './Error'


const Movies = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then((res)=>res.json())
      .then((res)=>{
        
        setData(res.entries);
        
      })
      .catch((err) => {
        return <Error/>;
       });
    },[])
    
   
 
   return (
    <>
    <Header/>
    <div className={style.popular}>
            <h2 className={style.h2}> Popular Movies</h2>
        </div>
    <div className={style.contain}> 
      {data.map((x)=>{
        if (x.releaseYear>2010 ){
          if ( x.programType === "movie"){
            
            return(
              <div className={style.grid}>
            <img src={x.images["Poster Art"].url} alt=""  width="120px" height="150px"/>
            <p>{x.title}</p>
            
            
          </div>
        )}}
      })}
    </div>
            </>
  )
}

export default Movies