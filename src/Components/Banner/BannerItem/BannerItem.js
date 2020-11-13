import React from "react";
import "./BannerItem.css";
import { Link } from "react-router-dom";

const BannerItem = (props) => {

  return (
    (props.redirect) ?
      <div className="banneritem">
        <Link to={props.route || "/"}>
          <img src={props.imagesrc} />
        </Link>
      </div>
      : <div className="banneritem">
        <img src={props.imagesrc} />
      </div>

  )
}

export { BannerItem };