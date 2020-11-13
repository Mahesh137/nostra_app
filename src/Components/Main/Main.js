import React,{useState,useEffect} from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Scorllabletab from "../Scorllabletab/Scorllabletab";
import Axios from "axios";


let Main=()=>{

    let [data,setdata]=useState({
        banners:[],
        challenges:[],
        sports:[],
        user_name:""
      })
      useEffect(()=>{
    
        Axios.get("http://localhost:3000/home").then((res)=>{
          console.log(res.data);
          setdata(res.data);
        })
    
      },[])

    return (
        <div className="App">
        <Header></Header>
        <Banner bannerlist={data.banners}></Banner>
        <Scorllabletab tablist={data.sports} cardlist={data.challenges}></Scorllabletab>
        {/* <Card cardlist={data.challenges}></Card> */}
        </div>
    )
}

export default Main;