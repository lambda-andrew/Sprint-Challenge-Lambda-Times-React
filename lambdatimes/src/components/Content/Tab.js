import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  let tabClassName;
  if(props.data === props.selectedTab) {
    tabClassName = 'tab active-tab';
  } else {
    tabClassName = 'tab';
  }
  return (
    <div
      className={tabClassName}
      onClick={() => props.newSelect(props.data)}
    >
      {props.data.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  data: PropTypes.string.isRequired
}

Tab.defaultProps = {
  data: []
}

export default Tab;
