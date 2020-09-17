import React from 'react'
import './style.css';
import Switch from '../switch'

function CardSmall({ id, icon, pageViews, growth,name }) {
  return (
    <div className="card-small">
      <p className="card-small-views">{name}</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {growth}%
            </span>
      </p>
    </div>
  );
}

export default CardSmall;