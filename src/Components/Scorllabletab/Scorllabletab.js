import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Sporticon from "./Sporticon"
import { Container } from '@material-ui/core';
import Card from "../Cards/Cards"

const Scorllabletab=(props)=>{

  let[original,setorigin]=useState([...props.cardlist]);
  let [data,setdata]=useState([...props.cardlist])
  useEffect(()=>{
    setdata([...props.cardlist]);
    setorigin([...props.cardlist]);
  },[props.cardlist])
  
 const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const findid = (event,sportsid)=>{
      if(sportsid==0){
        var results = [...original];
      }else{
      var results = props.cardlist.filter(function (entry) { return entry.sports_id == sportsid; })
      console.log(results)
    }
    setdata([...results])
   }
    useEffect(()=>{
      console.log(data)
    },[data])
  
    return (
        <Container maxWidth="xl" fixed>
        <AppBar position="static" color="white">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab  icon={<Sporticon imagesrc="/Assets/technology.png"/>} onClick={(event) => findid(event,0)} label="ALL"/>
            {props.tablist.map((a,i)=>{
                return <Tab key={i} icon={<Sporticon  imagesrc={a.sports_img_url}/>} onClick={(event) => findid(event, a.sports_id)} label={a.sports_name} />
             })}
          </Tabs>
        </AppBar>
        {/* <TabPanel value={value} index={0}>
        </TabPanel>  */}
        <Card cardlist={data}></Card>
       
        </Container>
    )
}

export default Scorllabletab;
