import React,{useState,useEffect} from 'react';
import classes from './App.module.css'
import Title from './component/Title';
import Nyukai from './component/Nyukai';
import Kiroku from './component/Kiroku';
import Sakuzyo from './component/Sakuzyo';
import Remenu from './component/Remenu';
import axios from 'axios';

  type Data={
    person:{
      id:number,
      name:string
      age:number,
      gender:string,
    };
    score:{
      id:number,
      akuryoku:number,
      zyoutai:number,
      tyouza:number,
      tankyori:number,
      tyoukyori:number,
      hanpuku:number,
      tatihaba:number,
      sohuto:number,
      goukei:number,
      rank:string,
    };
  };
    
function App() {
  const data0=[{
    person:{
    id:0,
    name:"佐藤博",
    age:24,
    gender:"男性",
    },
    score:{
    id:0,
    akuryoku:35,
    zyoutai:30,
    tyouza:50,
    tankyori:7.5,
    tyoukyori:600,
    hanpuku:55,
    tatihaba:200,
    sohuto:20,
    goukei:37,
    rank:"D",
  }}]

  const [page,setPage]=useState(true);
  const [display,setDisplay]=useState(true);
  const [titlepage,setTitlepage]=useState(false);
  const [data,setData]=useState<Data[]>(data0);

  const pageaction=()=>{
    setPage(!page)
  }
  const displayaction=()=>{
    setDisplay(!display)
  }

  useEffect(()=>{
    setData([])
    axios.get('http://localhost:3100/person')
    .then((res)=>{
      const persondata=res.data.map((obj)=>(obj.id!=100)?{
      person:obj,score:{}
      }:obj)
      setData(persondata)
    });
},[])

  return (
    <div>
      <button className={classes.Title} onClick={()=>{setTitlepage(false);setPage(true);setDisplay(true)}}>REGISTRTION SYSTEM</button>
      <div className={classes.App}>
        {(page==true)?
          <div>
            {(data==null)?<p></p>:<Title data={data} setData={setData} pageaction={pageaction} titlepage={titlepage} setTitlepage={setTitlepage}/>}
          </div>:
          <div>
            <Nyukai display={display} displayaction={displayaction} data={data} setData={setData}/>
            <Kiroku display={display} displayaction={displayaction} data={data} setData={setData}/>
            <Sakuzyo display={display} displayaction={displayaction} data={data} setData={setData}/>
            <Remenu display={display} pageaction={pageaction}/>
          </div>}
      </div>
    </div>
  );
}

export default App;
