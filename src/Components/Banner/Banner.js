import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { BannerItem } from "./BannerItem";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {

    let [state, updatestate] = useState([...props.bannerlist]);
    let [currentindex, setIndex] = useState(0);

    useEffect(() => {
        updatestate([...props.bannerlist]);
    }, [props.bannerlist])

    // setTimeout(() => {
    //     let index = currentindex;
    //     if (state.length) {
    //         let currentstate = [...state];
    //         let firstelem = currentstate.shift();
    //         currentstate.push(firstelem);
    //         updatestate(currentstate)
    //     }


    // }, 5000)

    console.log("this", props.bannerlist)
    return (
        <div className="bannercontainer">
            {/* <div className="banner">
                {state.map((a, i) => {
                    return <BannerItem key={i} imagesrc={a.img_url} redirect={a.redirect} route={a.route}></BannerItem>
                })}
            </div> */}
            <div className="banner">
                <div className="banneritem">
                    <Carousel>
                        {state.map((a, i) => {
                            return (
                                (a.redirect) ?
                                    <Carousel.Item interval={5000} key={i}>
                                        <div className="banneritem">
                                            <Link to={a.route || "/"}>
                                                <img
                                                    className="banner"
                                                    src={a.img_url}
                                                    alt="First slide"
                                                />
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    :
                                    <Carousel.Item interval={5000} key={i}>
                                        <div className="banneritem">

                                            <img
                                                className="banner"
                                                src={a.img_url}
                                                alt="First slide"
                                            />
                                        </div>
                                    </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Banner;