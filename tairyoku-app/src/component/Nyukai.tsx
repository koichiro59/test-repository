import React,{useRef, useState} from "react";
import classes from "./Nyukai.module.css"
import PropTypes from 'prop-types';
import axios from 'axios'

export const Nyukai = ({display,displayaction,data,setData}) => {
    const [nyukaipage,setNyukaipage]=useState(false)
    const [judge,setJudge]=useState(true);
    const ref1=useRef(null);
    const ref2=useRef(null);

    const startaction=()=>{
        displayaction();
        setNyukaipage(!nyukaipage)
    }

    const endaction=()=>{
        nyukaiaction();
        dataaction();
        displayaction(); 
        setNyukaipage(!nyukaipage);
    }

    const nyukaiaction=()=>{
        alert("あなたの会員コードは"+(data.length)+"です");
    }

    const dataaction=()=>{
        const prevdata={person:{
            id:data.length,
            name:ref1.current.value,
            age:ref2.current.value,
            gender:((judge==true)?"男性":"女性")
            },score:{
            }}
            setData([...data,prevdata]);
        axios.post("http://localhost:3100/person",prevdata.person).then(()=>{
            setData([...data,prevdata]);
        })
    }

    return (
    <div>
        {(display==true)?<button className={classes.btn} onClick={()=>startaction()}>入会登録</button>:<p></p>}
        {(nyukaipage==true)?
            <form>
                <div>
                    <div>
                        <p className={classes.text}>Name</p><br />
                        <input type="text" className={classes.submit} ref={ref1}/>
                    </div>
                    <div>
                        <p className={classes.text}>Age</p><br />
                        <input type="text" className={classes.submit} ref={ref2}/>
                    </div>
                    <div>
                        <p className={classes.text}>gender</p><br/>
                        <div className={classes.radio}>
                            <input type="radio" name="radio" onChange={()=>{setJudge(true)}}/>男性
                            <input type="radio" name="radio" onChange={()=>{setJudge(false)}}/>女性
                        </div>
                    </div>
                </div>
                <button type="submit" className={classes.submitbtn} onClick={()=>endaction()}>送信</button>
            </form>
        :<p></p>}
    </div>
  )
}

Nyukai.propTypes = {
    display: PropTypes.bool,
    displayaction: PropTypes.func,
    data:PropTypes.object,
    setData: PropTypes.func,
  };

export default Nyukai