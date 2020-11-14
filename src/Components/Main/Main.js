import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Card from "../Cards/Cards";
import Scorllabletab from "../Scorllabletab/Scorllabletab";
// import Axios from "axios";

import { getDashboardData } from "../../store/actions"


const Main = () => {

  // let [data,setdata]=useState({
  //     banners:[],
  //     challenges:[],
  //     sports:[],
  //     user_name:""
  //   })
  //   useEffect(()=>{

  //     Axios.get("http://localhost:3000/home").then((res)=>{
  //       console.log(res.data);
  //       setdata(res.data);
  //     })

  //   },[])

  const dispatch = useDispatch();


  const data = useSelector(
    ({ bannerDataReducer }) => bannerDataReducer.data
  )

  console.log("data", data)

  useEffect(() => {
    dispatch(getDashboardData())
  }, []);




  return (
    <div className="App">
      <Header></Header>
      {
        data && data.length ?
          <>
            <Banner />
            <Scorllabletab />
            {/* <Card /> */}
          </>
          : ''
      }


    </div>
  )
}

export default Main;