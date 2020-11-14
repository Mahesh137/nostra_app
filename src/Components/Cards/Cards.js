import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Cards.scss"

const Cards = (props) => {

    let [data, setData] = useState([])

    let [original, setorigin] = useState([...data]);

    const [value, setValue] = useState(0);

    let cardData = useSelector(
        ({ cardDataReducer }) => cardDataReducer.data
    )

    useEffect(() => {

        setData([...cardData])
        setorigin([...cardData])

    }, [cardData])

    const findid = (sportsid) => {
        console.log("sportsid", sportsid)
        if (sportsid == 0) {
            var results = [...original];
        } else {
            var results = original.filter(function (entry) { return entry.sports_id == sportsid; })
            console.log(results)
        }

        console.log("results", results)
        setData([...results])
    }

    useEffect(() => {
        console.log("props.tabFilter", props.tabFilter)
        setValue(props.tabFilter)
        findid(props.tabFilter)
    }, [props.tabFilter])


    console.log("call from cards ", data);
    if (data.length)
        return (
            data.map((a, i) => {
                return (
                    <div className="cardbox" key={i}>
                        <h5>Picks</h5>
                        <div className="detailsbox">
                            <img src={a.match_parties[0].party_img_url} />
                            <div >
                                <h4>{a.challenge_name}</h4>
                                <div><p>{a.desc}</p><span><img src="/Assets/live-min.png" /></span><p>Live Score Updates</p></div>
                            </div>
                            <img src={a.match_parties[1].party_img_url}></img>
                        </div>
                        <div className="rupee">
                            <div>
                                <img src="/Assets/ruppe-min.png" />
                                <span className="dataAttr">{a.prize_money}</span>
                            </div>
                            <div>
                                <img src="/Assets/timer-min.png" />
                                <span>{new Date(a.start_time).getHours() + "hr " + new Date(a.start_time).getMinutes() + "min "}</span>
                            </div>
                        </div>

                    </div>
                )
            }
            ))
    else
        return (
            <div>
                <p>No Data Available</p>
            </div>
        )
}

export default Cards;