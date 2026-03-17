import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  const handleButtonClick = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="card-btn" onClick={handleButtonClick}>
          Дізнатися більше
        </button>
      </div>
    </div>
  );
};

export default Card;