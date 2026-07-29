import NotFound from "./assets/notFound.png";
import "./notfound.css";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="notFound-container">
      <div className="img-container">
        <img src={NotFound} alt="Page Not Found" />
        <div className="not-found-text">
          <h1>
            <span>404</span> - Page Not Found
          </h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-back">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
