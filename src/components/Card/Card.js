import React from 'react';

import './Card.css';

function Card({ title, image, createdAt, chef, category }) {
  return (
    <div className="col s12 m6 l4">
      <div className="card medium">
        <div className="card-image">
          <img src={image} />
        </div>

        <div className="card-content">
          <div className="row">
            <span className="card-title blue-grey-text text-darken-4 center-align">
              {title}
            </span>
          </div>
          <div className="section card-action">
            <p className="blue-grey-text text-darken-4 left-align col s6">
              Chef {chef}
            </p>
            <p className="blue-grey-text text-darken-4 right-align col s6">
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
