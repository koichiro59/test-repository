import React,{useState,useRef} from 'react'
import classes from './Sakuzyo.module.css'
import PropTypes from 'prop-types';
import axios from 'axios'

const Sakuzyo = ({display,displayaction,data,setData}) => {
  const [sakuzyopage,setSakuzyopage]=useState(false);
  const [index,setIndex]=useState(-1)
  const ref=useRef(null)

  const startaction=()=>{
    displayaction();
    setSakuzyopage(!sakuzyopage);
    setIndex(-1)
  }

  const endaction=()=>{
    deletecode(ref.current.value);
    displayaction();
    setSakuzyopage(!sakuzyopage);
    alert("削除しました")
  }

  const deletecode=(e)=>{
    const newdata=data.filter((prevdata)=>prevdata.person.id!=e)
    setData(newdata)
    axios.delete('http://localhost:3100/person/'+index)
    axios.delete('http://localhost:3100/score/'+index)
 }

  return (
    <div>
      {(display==true)?<button className={classes.btn} onClick={()=>startaction()}>登録削除</button>:<p></p>}
        {(sakuzyopage==true)?
          <div>
            <p className={classes.code}>入会者コード</p>
              <select ref={ref} className={classes.select} onChange={(e)=>setIndex(Number(e.target.value))}>
                <option value="-1" selected>選択してください</option>
                {Object.keys(data).map((newcount,index)=>
                <option key={index} value={newcount}>{newcount}</option>)}
              </select><br />
            {(index!=-1)?
              <div className={classes.message}>
                <p>{data[index].person.name}様、本当に削除してよろしいでしょうか?</p>
              </div>:<p></p>}
            <button className={classes.sakuzyobtn} onClick={()=>endaction()}>削除</button>
        </div>:<p></p>}
    </div>
  )
}

Sakuzyo.propTypes = {
  display: PropTypes.bool,
  displayaction: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Sakuzyo