import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return <Tab 
                    data={tab} 
                    selectedTab={props.selectedTab} 
                    newSelect={props.newSelect}
                  />
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired
}

Tabs.defaultProps = {
  tabs: []
}

export default Tabs;
