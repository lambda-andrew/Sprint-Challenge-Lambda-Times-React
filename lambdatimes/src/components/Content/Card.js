import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img} alt='Author'/>
        </div>
        <span>By {props.data.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}

Card.defaultProps = {
  data: {}
}

export default Card;
