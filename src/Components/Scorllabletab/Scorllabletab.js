import React, { useState, useEffect } from 'react';
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
import { useSelector } from 'react-redux';

const Scorllabletab = (props) => {

  const data = useSelector(
    ({ tabDataReducer }) => tabDataReducer.data
  )

  const [value, setValue] = useState(0);
  const [valueIdx, setValueIdx] = useState(0);


  const handleChange = (event, newValue, idx) => {
    console.log("1", idx)
    if (idx || (idx === 0)) setValueIdx(idx)
    event.preventDefault()
    event.stopPropagation()

    console.log("handlechange", newValue)

    if (newValue || (newValue === 0)) setValue(newValue);

  };


  const findid = (event, sportsid, idx) => {
    console.log(idx)
    if (idx || (idx === 0)) setValueIdx(idx)
    event.preventDefault()
    event.stopPropagation()

    console.log("findid", sportsid)

    if (sportsid || (sportsid === 0)) setValue(sportsid)

  }


  return (
    <Container maxWidth="xl" fixed>
      <AppBar position="sticky" color="default">
        <Tabs
          value={valueIdx}
          onClick={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={<Sporticon imagesrc="/Assets/technology.png" />} onClick={(event) => findid(event, 0, 0)} label="ALL" />
          {data.map((a, i) => {
            return <Tab key={i} icon={<Sporticon imagesrc={a.sports_img_url} />} onClick={(event) => findid(event, a.sports_id, i + 1)} label={a.sports_name} />
          })}
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        </TabPanel>  */}

      <Card tabFilter={value}></Card>

    </Container>
  )
}

export default Scorllabletab;
