import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      ...this.state,
      selected: tab
    })
  };

  filterCards = () => {
    if(this.state.selected === 'all') {
      return this.state.cards
    } else {
      let filterData = this.state.cards.filter(card => {
        return (card.tab === this.state.selected) ? card : null;
      })
      return filterData;
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs 
          selectedTab={this.state.selected}
          tabs={this.state.tabs} 
          newSelect={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
