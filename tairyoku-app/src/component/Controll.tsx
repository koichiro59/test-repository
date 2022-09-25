import React,{useState,useRef} from 'react'
import classes from './Controll.module.css'
import PropTypes from 'prop-types';

const ControllfirmPage = ({data}) => {
  const [controllPage,setControllpage]=useState(true)
  const ref=useRef(null)
  
  const confirmaction=()=>{
    if(ref.current.value=="123456789"){
      setControllpage(!controllPage)
      alert("管理者用ページです");
    }else{
      alert("パスワードが違います")
    }
  }
  
  return (
    <div>
      {(controllPage==true)?
        <div className={classes.pass}>password<br/>
          <input type="text" value="123456789" ref={ref} className={classes.input}/>
          <button className={classes.btn} onClick={()=>{confirmaction()}}>確認</button>
        </div>:
        <div>
          <table className={classes.table}>
            <tr>
              <th>会員コード</th><th>名前</th><th>年齢</th><th>性別</th>
              <th>握力</th><th>上体起こし</th><th>長座体前屈</th><th>50m走</th>
              <th>持久走</th><th>反復横跳び</th><th>立ち幅跳び</th><th>ソフトボール投げ</th><th>総合得点</th><th>評価</th>
            </tr>
          {data.map((newdata,index)=>{return(
            <tr key={index}>
              <td>{newdata.person.id}</td><td>{newdata.person.name}</td><td>{newdata.person.age}</td><td>{newdata.person.gender}</td>
              <td>{newdata.score.akuryoku}</td><td>{newdata.score.zyoutai}</td><td>{newdata.score.tyouza}</td><td>{newdata.score.tankyori}</td>
              <td>{newdata.score.tyoukyori}</td><td>{newdata.score.hanpuku}</td><td>{newdata.score.tatihaba}</td><td>{newdata.score.sohuto}</td><td>{newdata.score.goukei}</td><td>{newdata.score.rank}</td>
            </tr>)})}
          </table>
        </div>}
    </div>
  )
}

ControllfirmPage.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default ControllfirmPage