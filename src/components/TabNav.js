import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const panes = [
  { menuItem: 'Home Page', render: () => <Tab.Pane></Tab.Pane> },
  { menuItem: 'Characters', render: () => <Tab.Pane></Tab.Pane> },
  { menuItem: 'Locations', render: () => <Tab.Pane></Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane></Tab.Pane> }
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic