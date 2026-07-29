import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faBridge,
  faWater,
  faMountain,
  faCube,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import SERVICES from "./data/SERVICES.JS";

export default function Services() {
  const cardElement = SERVICES.map((item, index) => {
    if (index <= 5) {
      return (
        <div className="card" key={index}>
          <h3>
            <FontAwesomeIcon icon={item.icon} className="icons" />
          </h3>
          <h2>{item.service}</h2>
          <p>{item.description}</p>
        </div>
      );
    }
  });

  return (
    <div className="service-container">
      <div className="text-part">
        <span className="section-badge">What We Offer</span>
        <h2>Comprehensive Engineering Services</h2>
        <p>
          From concept to completion, we deliver innovative solutions across all
          aspects of civil and structural engineering.
        </p>
        <Link to={"/services"}>
          <button className="view-services">
            CLICK HERE TO SEE ALL SERVICES.
          </button>
        </Link>
      </div>
      <div className="card-part">{cardElement}</div>
    </div>
  );
}
