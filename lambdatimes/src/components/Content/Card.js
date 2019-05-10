import React from 'react';
import PropTypes from 'prop-types';

const Card = card => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt="artical"/>
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,

})).isRequired
}

export default Card;
