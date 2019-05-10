import React from 'react';

const Tab = props => {
  console.log(props)
      if (props.tab === props.selectedTab) {
        props.classList.add("active-tab")
      } else {
        return props.tab;
      }
  return (
    <div
      className={''}
      onClick={(tab) => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
