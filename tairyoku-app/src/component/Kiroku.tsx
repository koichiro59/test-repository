import React,{useState,useRef} from 'react'
import classes from './Kiroku.module.css'
import PropTypes from 'prop-types';
import axios from 'axios';

export const Kiroku = ({display,displayaction,data,setData}) => {
  const [kirokupage,setKirokupage]=useState(false);
  const [kirokudisplay,setKirokudisplay]=useState(false);
  const [index,setIndex]=useState(-1);
  const [score1,setScore1]=useState(0)
  const [score2,setScore2]=useState(0)
  const [score3,setScore3]=useState(0)
  const [score4,setScore4]=useState(0)
  const [score5,setScore5]=useState(0)
  const [score6,setScore6]=useState(0)
  const [score7,setScore7]=useState(0)
  const [score8,setScore8]=useState(0)
  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);
  const ref4=useRef(null);
  const ref5=useRef(null);
  const ref6=useRef(null);
  const ref7=useRef(null);
  const ref8=useRef(null);

  const startaction=()=>{
    displayaction();
    setKirokupage(!kirokupage);
    setKirokudisplay(!kirokudisplay)
  }

  const endaction=()=>{
    undoaction();
    goukeiaction();
    hyouka(data[index].score.goukei,data[index].person.age);
    displayaction();
    setKirokupage(!kirokupage);
    setKirokudisplay(!kirokudisplay);
    axiosaction(data[index].score.rank);
    setIndex(-1)
    alert("記録を追加しました");
  }

  const akuryokurank=(score,gender)=>{
    if(gender=="男性"){
      if(56<=score)setScore1(10)
      else if(51<=score&&55<=score)setScore1(9)
      else if(47<=score&&50<=score)setScore1(8)
      else if(43<=score&&46<=score)setScore1(7)
      else if(38<=score&&42<=score)setScore1(6)
      else if(33<=score&&37<=score)setScore1(5)
      else if(28<=score&&32<=score)setScore1(4)  
      else if(23<=score&&27<=score)setScore1(3)  
      else if(18<=score&&22<=score)setScore1(2)
      else if(score<=17)setScore1(1)
    }else{
      if(36<=score)setScore1(10)
      else if(33<=score&&35<=score)setScore1(9)
      else if(30<=score&&32<=score)setScore1(8)
      else if(28<=score&&29<=score)setScore1(7)
      else if(25<=score&&27<=score)setScore1(6)
      else if(23<=score&&24<=score)setScore1(5)
      else if(20<=score&&22<=score)setScore1(4)  
      else if(17<=score&&19<=score)setScore1(3)  
      else if(14<=score&&16<=score)setScore1(2)
      else if(score<=13)setScore1(1)
    }
  }

  const zyoutairank=(score,gender)=>{
    if(gender=="男性"){
      if(35<=score)setScore2(10)
      else if(33<=score&&34<=score)setScore2(9)
      else if(30<=score&&32<=score)setScore2(8)
      else if(27<=score&&29<=score)setScore2(7)
      else if(25<=score&&26<=score)setScore2(6)
      else if(22<=score&&24<=score)setScore2(5)
      else if(19<=score&&21<=score)setScore2(4)  
      else if(16<=score&&18<=score)setScore2(3)  
      else if(13<=score&&15<=score)setScore2(2)
      else if(score<=12)setScore2(1)
    }else{
      if(29<=score)setScore2(10)
      else if(26<=score&&28<=score)setScore2(9)
      else if(23<=score&&25<=score)setScore2(8)
      else if(20<=score&&22<=score)setScore2(7)
      else if(18<=score&&19<=score)setScore2(6)
      else if(15<=score&&17<=score)setScore2(5)
      else if(13<=score&&14<=score)setScore2(4)  
      else if(11<=score&&12<=score)setScore2(3)  
      else if(8<=score&&10<=score)setScore2(2)
      else if(score<=7)setScore2(1)
    }
  }

  const tyouzarank=(score,gender)=>{
    if(gender=="男性"){
      if(64<=score)setScore3(10)
      else if(58<=score&&63<=score)setScore3(9)
      else if(53<=score&&57<=score)setScore3(8)
      else if(49<=score&&52<=score)setScore3(7)
      else if(44<=score&&48<=score)setScore3(6)
      else if(39<=score&&43<=score)setScore3(5)
      else if(33<=score&&38<=score)setScore3(4)  
      else if(28<=score&&32<=score)setScore3(3)  
      else if(21<=score&&27<=score)setScore3(2)
      else if(score<=20)setScore3(1)
    }else{
      if(63<=score)setScore3(10)
      else if(58<=score&&62<=score)setScore3(9)
      else if(54<=score&&57<=score)setScore3(8)
      else if(50<=score&&53<=score)setScore3(7)
      else if(45<=score&&49<=score)setScore3(6)
      else if(40<=score&&44<=score)setScore3(5)
      else if(35<=score&&39<=score)setScore3(4)  
      else if(30<=score&&34<=score)setScore3(3)  
      else if(23<=score&&29<=score)setScore3(2)
      else if(score<=22)setScore3(1)
    }
  }

  const tankyorirank=(score,gender)=>{
    if(gender=="男性"){
      if(9.8<=score)setScore4(1)
      else if(9.1<=score&&9.7<=score)setScore4(2)
      else if(8.5<=score&&9<=score)setScore4(3)
      else if(8<=score&&8.4<=score)setScore4(4)
      else if(7.6<=score&&7.9<=score)setScore4(5)
      else if(7.3<=score&&7.5<=score)setScore4(6)
      else if(7.1<=score&&7.2<=score)setScore4(7)  
      else if(6.9<=score&&7<=score)setScore4(8)  
      else if(6.7<=score&&6.8<=score)setScore4(9)
      else if(score<=6.6)setScore4(10)
    }else{
      if(11.3<=score)setScore4(1)
      else if(10.4<=score&&11.2<=score)setScore4(2)
      else if(9.9<=score&&10.3<=score)setScore4(3)
      else if(9.4<=score&&9.8<=score)setScore4(4)
      else if(9.0<=score&&9.3<=score)setScore4(5)
      else if(8.7<=score&&8.9<=score)setScore4(6)
      else if(8.4<=score&&8.6<=score)setScore4(7)  
      else if(8.1<=score&&8.3<=score)setScore4(8)  
      else if(7.8<=score&&8.0<=score)setScore4(9)
      else if(score<=7.7)setScore4(10)
    }
  }

  const tyoukyorirank=(score,gender)=>{
    if(gender=="男性"){
      if(561<=score)setScore5(1)
      else if(500<=score&&560<=score)setScore5(2)
      else if(451<=score&&499<=score)setScore5(3)
      else if(411<=score&&450<=score)setScore5(4)
      else if(383<=score&&410<=score)setScore5(5)
      else if(356<=score&&382<=score)setScore5(6)
      else if(334<=score&&355<=score)setScore5(7)  
      else if(317<=score&&333<=score)setScore5(8)  
      else if(300<=score&&316<=score)setScore5(9)
      else if(score<=299)setScore5(10)
    }else{
      if(418<=score)setScore5(1)
      else if(395<=score&&417<=score)setScore5(2)
      else if(343<=score&&394<=score)setScore5(3)
      else if(319<=score&&342<=score)setScore5(4)
      else if(297<=score&&318<=score)setScore5(5)
      else if(278<=score&&296<=score)setScore5(6)
      else if(260<=score&&277<=score)setScore5(7)  
      else if(243<=score&&259<=score)setScore5(8)  
      else if(230<=score&&242<=score)setScore5(9)
      else if(score<=229)setScore5(10)
    }
  }

  const hanpukurank=(score,gender)=>{
    if(gender=="男性"){
      if(63<=score)setScore6(10)
      else if(60<=score&&62<=score)setScore6(9)
      else if(56<=score&&59<=score)setScore6(8)
      else if(53<=score&&55<=score)setScore6(7)
      else if(49<=score&&52<=score)setScore6(6)
      else if(45<=score&&48<=score)setScore6(5)
      else if(41<=score&&44<=score)setScore6(4)  
      else if(37<=score&&40<=score)setScore6(3)  
      else if(30<=score&&36<=score)setScore6(2)
      else if(score<=29)setScore6(1)
    }else{
      if(53<=score)setScore6(10)
      else if(50<=score&&52<=score)setScore6(9)
      else if(48<=score&&49<=score)setScore6(8)
      else if(45<=score&&47<=score)setScore6(7)
      else if(42<=score&&44<=score)setScore6(6)
      else if(39<=score&&41<=score)setScore6(5)
      else if(36<=score&&38<=score)setScore6(4)  
      else if(32<=score&&35<=score)setScore6(3)  
      else if(27<=score&&31<=score)setScore6(2)
      else if(score<=26)setScore6(1)
    }
  }

  const tatihabarank=(score,gender)=>{
    if(gender=="男性"){
      if(265<=score)setScore7(10)
      else if(254<=score&&264<=score)setScore7(9)
      else if(242<=score&&253<=score)setScore7(8)
      else if(230<=score&&241<=score)setScore7(7)
      else if(218<=score&&229<=score)setScore7(6)
      else if(203<=score&&217<=score)setScore7(5)
      else if(188<=score&&202<=score)setScore7(4)  
      else if(170<=score&&187<=score)setScore7(3)  
      else if(150<=score&&169<=score)setScore7(2)
      else if(score<=149)setScore7(1)
    }else{
      if(210<=score)setScore7(10)
      else if(200<=score&&209<=score)setScore7(9)
      else if(190<=score&&199<=score)setScore7(8)
      else if(179<=score&&189<=score)setScore7(7)
      else if(168<=score&&178<=score)setScore7(6)
      else if(157<=score&&167<=score)setScore7(5)
      else if(145<=score&&156<=score)setScore7(4)  
      else if(132<=score&&144<=score)setScore7(3)  
      else if(118<=score&&131<=score)setScore7(2)
      else if(score<=117)setScore7(1)
    }
  }
  const sohutorank=(score,gender)=>{
    if(gender=="男性"){
      if(37<=score)setScore8(10)
      else if(34<=score&&36<=score)setScore8(9)
      else if(31<=score&&33<=score)setScore8(8)
      else if(28<=score&&30<=score)setScore8(7)
      else if(25<=score&&27<=score)setScore8(6)
      else if(22<=score&&24<=score)setScore8(5)
      else if(19<=score&&21<=score)setScore8(4)  
      else if(16<=score&&18<=score)setScore8(3)  
      else if(13<=score&&15<=score)setScore8(2)
      else if(score<=12)setScore8(1)
    }else{
      if(23<=score)setScore8(10)
      else if(20<=score&&22<=score)setScore8(9)
      else if(18<=score&&19<=score)setScore8(8)
      else if(16<=score&&17<=score)setScore8(7)
      else if(14<=score&&15<=score)setScore8(6)
      else if(12<=score&&13<=score)setScore8(5)
      else if(score==11)setScore8(4)  
      else if(score==10)setScore8(3)  
      else if(8<=score&&9<=score)setScore8(2)
      else if(score<=7)setScore8(1)
    }
  }
  
  const hyouka=(goukei,age)=>{
    if(17<=age){
      if(65<=goukei)hyoukaaction("A")
      else if(54<=goukei&&64<=goukei)hyoukaaction("B")
      else if(43<=goukei&&53<=goukei)hyoukaaction("C")
      else if(31<=goukei&&42<=goukei)hyoukaaction("D")
      else hyoukaaction("E")
    }else if(age==16){
      if(63<=goukei)hyoukaaction("A")
      else if(53<=goukei&&62<=goukei)hyoukaaction("B")
      else if(42<=goukei&&52<=goukei)hyoukaaction("C")
      else if(31<=goukei&&41<=goukei)hyoukaaction("D")
      else hyoukaaction("E")
    }else if(age==15){
      if(61<=goukei)hyoukaaction("A")
      else if(52<=goukei&&60<=goukei)hyoukaaction("B")
      else if(41<=goukei&&51<=goukei)hyoukaaction("C")
      else if(31<=goukei&&40<=goukei)hyoukaaction("D")
      else hyoukaaction("E")
    }else if(age==14){
      if(60<=goukei)hyoukaaction("A")
      else if(51<=goukei&&59<=goukei)hyoukaaction("B")
      else if(41<=goukei&&50<=goukei)hyoukaaction("C")
      else if(31<=goukei&&40<=goukei)hyoukaaction("D")
      else hyoukaaction("E")
    }else if(age==13){
      if(57<=goukei)hyoukaaction("A")
      else if(47<=goukei&&56<=goukei)hyoukaaction("B")
      else if(37<=goukei&&46<=goukei)hyoukaaction("C")
      else if(27<=goukei&&36<=goukei)hyoukaaction("D")
      else hyoukaaction("E")
    }else{
      if(51<=goukei)hyoukaaction("A")
      else if(41<=goukei&&50<=goukei)hyoukaaction("B")
      else if(32<=goukei&&40<=goukei)hyoukaaction("C")
      else if(22<=goukei&&31<=goukei)hyoukaaction("D")
      else hyoukaaction("E")
    }
  }  

  const hyoukaaction=(a:string)=>{
      const newdata=data.map((obj)=>((obj.person.id==index)?{person:{
        id:obj.person.id,
        name:obj.person.name,
        age:obj.person.age,
        gender:obj.person.gender
      },score:{
        id:index,
        akuryoku:ref1.current.value,
        zyoutai:ref2.current.value,
        tyouza:ref3.current.value,
        tankyori:ref4.current.value,
        tyoukyori:ref5.current.value,
        hanpuku:ref6.current.value,
        tatihaba:ref7.current.value,
        sohuto:ref8.current.value,
        goukei:(score1+score2+score3+score4+score5+score6+score7+score8),
        rank:a
      }}:obj)
    )
    setData(newdata);
  }

  const goukeiaction=()=>{
      const newdata=data.map((obj)=>((obj.person.id==index)?{person:{
        id:obj.person.id,
        name:obj.person.name,
        age:obj.person.age,
        gender:obj.person.gender
      },score:{
        id:index,
        akuryoku:ref1.current.value,
        zyoutai:ref2.current.value,
        tyouza:ref3.current.value,
        tankyori:ref4.current.value,
        tyoukyori:ref5.current.value,
        hanpuku:ref6.current.value,
        tatihaba:ref7.current.value,
        sohuto:ref8.current.value,
        goukei:(score1+score2+score3+score4+score5+score6+score7+score8)
      }}:obj))
      setData(newdata)
  }

  const undoaction=()=>{
    const newdata=data.map((obj)=>(obj.person.id==index)?{
      person:{
        id:obj.person.id,
        name:obj.person.name,
        age:obj.person.age,
        gender:obj.person.gender
      },score:{
        id:index,
        akuryoku:ref1.current.value,
        zyoutai:ref2.current.value,
        tyouza:ref3.current.value,
        tankyori:ref4.current.value,
        tyoukyori:ref5.current.value,
        hanpuku:ref6.current.value,
        tatihaba:ref7.current.value,
        sohuto:ref8.current.value,
      }}:obj)
    setData(newdata)
  }

  const axiosaction=(a:string)=>{
    const newdata={
      id:index,
      akuryoku:ref1.current.value,
      zyoutai:ref2.current.value,
      tyouza:ref3.current.value,
      tankyori:ref4.current.value,
      tyoukyori:ref5.current.value,
      hanpuku:ref6.current.value,
      tatihaba:ref7.current.value,
      sohuto:ref8.current.value,
      goukei:(score1+score2+score3+score4+score5+score6+score7+score8),
      rank:a,
    }
    axios.post("http://localhost:3100/score",newdata);
  }
  return (
    <div>
    {(display==true)?<button className={classes.btn} onClick={()=>startaction()}>計測記録入力</button>:<p></p>}
      {(kirokupage==true)?
        <div>
          <p className={classes.code}>入会者コード</p>
          <select className={classes.select} onChange={(e)=>setIndex(Number(e.currentTarget.value))}>
            <option value="-1" selected>選択してください</option>
            {Object.keys(data).map((prevcount,index)=>
              <option key={index} value={prevcount}>{prevcount}</option>)}
          </select>
        </div>:<p></p>}  
      {(kirokudisplay==true)?
        <div>
          {(index!=-1)?
            <div>
              <table className={classes.table}>
                <tr><th>名前</th><th>年齢</th><th>性別</th></tr>
                <tr><td>{data[index].person.name}</td><td>{data[index].person.age}</td><td>{data[index].person.gender}</td></tr>
              </table>
              <div className={classes.text}>
                <label>握力</label><input type="text" ref={ref1} className={classes.data1} placeholder="例)35" onChange={()=>akuryokurank(ref1.current.value,data[index].person.gender)}/><br />
                <label>上体起こし</label><input type="text" ref={ref2} className={classes.data2} placeholder="例)30" onChange={()=>zyoutairank(ref2.current.value,data[index].person.gender)}/><br />
                <label>長座体前屈</label><input type="text" ref={ref3} className={classes.data3} placeholder="例)50" onChange={()=>tyouzarank(ref3.current.value,data[index].person.gender)}/><br />
                <label>50m走</label><input type="text" ref={ref4} className={classes.data4} placeholder="例)7.5" onChange={()=>tankyorirank(ref4.current.value,data[index].person.gender)}/><br />
                <label>持久走</label><input type="text" ref={ref5} className={classes.data5} placeholder="例)600" onChange={()=>tyoukyorirank(ref5.current.value,data[index].person.gender)}/><br />
                <label>反復横跳び</label><input type="text" ref={ref6} className={classes.data6} placeholder="例)55" onChange={()=>hanpukurank(ref6.current.value,data[index].person.gender)}/><br />
                <label>立ち幅跳び</label><input type="text"ref={ref7} className={classes.data7} placeholder="例)200" onChange={()=>tatihabarank(ref7.current.value,data[index].person.gender)}/><br />
                <label>ソフトボール投げ</label><input type="text" ref={ref8} className={classes.data8} placeholder="例)20" onChange={()=>sohutorank(ref8.current.value,data[index].person.gender)}/><br />
              </div>    
            <div>
            {(data[index].score!=null)?
              <div>
                <label className={classes.goukei}>総合点</label><br /><button className={classes.goukeibtn}>{data[index].score.goukei}</button>
              </div>:<p></p>}
              <button onClick={()=>goukeiaction()} className={classes.displaybtn1}>算出</button>
            </div>
            <div>
              {(data[index].score!=null)?
                <div>  
                  <label className={classes.rank}>評価</label><br /><button className={classes.rankbtn}>{data[index].score.rank}</button>
                </div>:<p></p>}
              <button onClick={()=>hyouka(data[index].score.goukei,data[index].person.age)} className={classes.displaybtn2}>算出</button>
            </div>
          <button className={classes.kirokubtn} onClick={()=>endaction()}>記録を追加</button></div>:<p></p>}
        </div>:<p></p>}
    </div>
  )
}

Kiroku.propTypes = {
  display: PropTypes.bool,
  displayaction: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Kiroku