import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
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
        <Carousel>
            {state.map((a, i) => {
                return (
                    (a.redirect) ?
                        <Carousel.Item interval={5000} key={i}>
                            <Link to={a.route || "/"}>
                                <img
                                    className="d-block w-100"
                                    src={a.img_url}
                                    alt="First slide"
                                />
                            </Link>
                        </Carousel.Item>
                        :
                        <Carousel.Item interval={5000} key={i}>
                            <img
                                className="d-block w-100"
                                src={a.img_url}
                                alt="First slide"
                            />
                        </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Banner;