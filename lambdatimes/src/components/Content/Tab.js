import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {

  let tabName = ''
      if (props.tab === props.selectedTab) {
        tabName = "tab active-tab"
      } else {
        tabName = "tab"
      }
  return (
    <div
      className={tabName}
      onClick={() => {
         props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tab;
