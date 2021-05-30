import React from "react";
import "../end/End.scss";
import { Link } from "react-router-dom";

const End = () => {
  const year = new Date().getFullYear();
  return (
    <div className="end">
      <div className="first__end">
        <div className="common__end">
          <h5>AbeBooks</h5>
          <Link to="">Books,art</Link>
          <br />
          <Link to="">& collections</Link>
        </div>
        <div className="common__end">
          <h5>Amazon Web Services</h5>
          <Link to="">Scalable Cloud</Link>
          <br />
          <Link to="">Computing Services</Link>
        </div>
        <div className="common__end">
          <h5>Audible</h5>
          <Link to="">Download</Link>
          <br />
          <Link to="">Audio Books</Link>
        </div>
        <div className="common__end">
          <h5>DPReview</h5>
          <Link to="">Digital</Link>
          <br />
          <Link to="">Photography</Link>
        </div>
        <div className="common__end">
          <h5>IMDb</h5>
          <Link to="">Movies,TV</Link>
          <br />
          <Link to="">& Celebrities</Link>
        </div>
        <div className="common__end">
          <h5>Shopbop</h5>
          <Link to="">Designer</Link>
          <br />
          <Link to="">Fashion Brands</Link>
        </div>
        <div className="common__end">
          <h5>Amazon Business</h5>
          <Link to="">Everything for</Link>
          <br />
          <Link to="">Your Business</Link>
        </div>
        <div className="common__end">
          <h5>Prime Now</h5>
          <Link to="">2-Hour Delivery</Link>
          <br />
          <Link to="">on Everyday Items</Link>
        </div>
        <div className="common__end">
          <h5>Amazon Prime Music</h5>
          <Link to="">70 million songs,ad-free</Link>
          <br />
          <Link to="">Over 9 million podcast episodes</Link>
        </div>
      </div>
      <div className="second__end">
        <p>&copy; Copyright {year} | Made by Aloof Programmer</p>
      </div>
    </div>
  );
};

export default End;
