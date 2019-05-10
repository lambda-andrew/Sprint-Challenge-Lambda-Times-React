import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {props.tabs.map(t => <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={t}/>)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}
export default Tabs;
