import React, { useState, useEffect } from "react";
import { BannerItem } from "./BannerItem";
import "./Banner.css";

const Banner = (props) => {

    let [state, updatestate] = useState([...props.bannerlist]);
    let [currentindex, setIndex] = useState(0);

    useEffect(() => {
        updatestate([...props.bannerlist]);
    }, [props.bannerlist])

    setTimeout(() => {
        let index = currentindex;
        if (state.length) {
            let currentstate = [...state];
            let firstelem = currentstate.shift();
            currentstate.push(firstelem);
            updatestate(currentstate)
        }


    }, 5000)


    return (
        <div className="bannercontainer">
            <div className="banner">
                {state.map((a, i) => {
                    return <BannerItem key={i} imagesrc={a.img_url} redirect={a.redirect} route={a.route}></BannerItem>
                })}
            </div>
        </div>
    )
}

export default Banner;