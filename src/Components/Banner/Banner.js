import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {

    // let [state, updatestate] = useState([...props.bannerlist]);

    const data = useSelector(
        ({ bannerDataReducer }) => bannerDataReducer.data
    )


    // useEffect(() => {
    //     updatestate([...props.bannerlist]);
    // }, [props.bannerlist])

    // console.log("this", props.bannerlist)
    return (
        <Carousel>
            {data.map((a, i) => {
                return (
                    (a.redirect) ?
                        <Carousel.Item style={{ height: '80%' }} interval={5000} key={i}>
                            <Link to={a.route || "/"}>
                                <div className="parent d-flex justify-content-center">
                                    <img
                                        className="d-block"
                                        src={a.img_url}
                                        alt="First slide"
                                    />
                                </div>
                            </Link>
                        </Carousel.Item>
                        :
                        <Carousel.Item style={{ height: '80%' }} interval={5000} key={i}>
                            <div className="parent d-flex justify-content-center">
                                <img
                                    className="d-block"
                                    src={a.img_url}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Banner;