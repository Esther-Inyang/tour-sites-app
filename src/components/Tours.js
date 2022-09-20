import React, { useState } from "react";
import "./Tours.css";

function Tours({ tourData, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <main>
      <h1 className="page-title">Tours</h1>

      {tourData.map((data) => {
        const { id, name, info, image, price } = data;
        return (
          <div key={id} className="tours-container">
            <img src={image} alt="" className="img" />
            <div className="info-container">
              <div className="name-price">
                <h1 className="title">{name}</h1>
                <p className="price">${price}</p>
              </div>
              <p className="info">
                {readMore ? info : `${info.substring(0, 300)}...`}
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="readmore-btn"
                >
                  {readMore ? "show less" : "read more"}
                </button>
              </p>
              <div className="btn-container">
                <button className="delete-btn" onClick={() => removeTour(id)}>
                  Not interested
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Tours;
