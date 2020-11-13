import React from "react";
import  "./Cards.css"

const Cards=(props)=>{

    console.log("call from cards ",props.cardlist);
    if(props.cardlist.length)
    return (
        props.cardlist.map((a,i)=>{
            return(
            <div className="cardbox" key={i}>
            <h5>Picks</h5>
            <div className="detailsbox">
            <img  src={a.match_parties[0].party_img_url}/>
            <div >
            <h4>{a.challenge_name}</h4>
                <div><p>{a.desc}</p><span><img src="/Assets/live-min.png"/></span><p>Live Score Updates</p></div>
            </div>
            <img src={a.match_parties[1].party_img_url}></img>
            </div>
            <div  className="rupes">
                <div>
                <img src="/Assets/ruppe-min.png"/>
            <span>{a.prize_money}</span>
                </div>
                <div>
                <img src="/Assets/timer-min.png"/>
            <span>{new Date(a.start_time).getHours() + "hr " +new Date(a.start_time).getMinutes() + "min "}</span>
                </div>
            </div>

       </div>
        )}     
    ))
    else 
    return(
        <div>
        <p>No Data Available</p>
        </div>
    )
}

export default Cards;