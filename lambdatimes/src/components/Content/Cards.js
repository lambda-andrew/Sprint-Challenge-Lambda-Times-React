import React, { Component } from 'react';
import { cardData } from '../../data';
import Card from './Card';

export default class Cards extends Component {
  render() {
    return (
      <div className="cards-container">
        {this.props.cards.map((card, idx) =>
          <Card key={idx} card={card} />
        )}
      </div>
    )
  }
}
