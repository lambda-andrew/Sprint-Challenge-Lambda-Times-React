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
      cards: cardData,
      tabs: tabData
    });
  }

  changeSelected = tab => {
      if (this.state.selected === tab) {
        return;
      } else {
        this.setState({ selected: tab });
      }
    };
  


  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      const newCardList = this.state.cards.filter(
        thing => thing.tab === this.state.selected
      );
      return newCardList;
    }
}

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
