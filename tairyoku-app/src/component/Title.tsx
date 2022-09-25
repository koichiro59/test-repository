import React,{ useState ,useEffect} from 'react'
import classes from './Title.module.css'
import PropTypes from 'prop-types';
import Controll from './Controll';
import axios from 'axios'

const Title = ({data,setData,pageaction,titlepage,setTitlepage}) => {
  
  const onloadaction=()=>{
    axios.get('http://localhost:3100/score')
    .then((res)=>{
      const scoredata=res.data.map((obj)=>(obj.id!=100)?{
        person:data[obj.id].person,score:obj
      }:obj)
      setData(scoredata)
    })
  }

  return (
    <div>
      {(titlepage==true)?<div><Controll data={data} setData={setData}/></div>:
        <div className={classes.btn}>
            <button className={classes.Titlebtn} onClick={()=>{onloadaction();pageaction()}}>MENU</button>
            <button className={classes.Controllbtn} onClick={()=>{onloadaction();setTitlepage(!titlepage)}}>管理者の方へ</button>
        </div>}
    </div>
  )
}

Title.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  pageaction: PropTypes.func,
  titlepage: PropTypes.bool,
  setTitlepage: PropTypes.func,
};

export default Title