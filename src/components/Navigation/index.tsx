import * as React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import {getPath} from '../../utils/path-utils';

import { Link } from "react-router-dom";


const styleColor={
  'color':'#888'
}

export namespace NavigationBar {
    export interface Props {
    }
  
    export interface State {
        selectedIndex: number;
    }
  }

export class NavigationBar extends React.Component<NavigationBar.Props, NavigationBar.State> {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  select(index) { this.setState({ selectedIndex: index }) };

  render() {
    return (
      <Paper zDepth={1} className='navBar'>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>

    
          <Link to={getPath('actors')}>
            <BottomNavigationItem
              label="Actors"
              icon={<i className="material-icons" style={styleColor}>face</i>}
              onClick={() => this.select(0)}
            />
          </Link>
          
          <Link to={getPath('films')}>
            <BottomNavigationItem
              label="Films"
              icon={<i className="material-icons" style={styleColor}>movie</i>}
              onClick={() => this.select(1)}
            />
          </Link>

          <Link to={getPath('starships')}>
            <BottomNavigationItem
              label="Starships"
              icon={<i className="material-icons" style={styleColor}>gamepad</i>}
              onClick={() => this.select(2)}
            />
          </Link>

          <Link to={getPath('planets')}>
            <BottomNavigationItem
              label="Planets"
              icon={<i className="material-icons" style={styleColor}>tonality</i>}
              onClick={() => this.select(3)}
            />
          </Link>

          <Link to={getPath('vehicles')}>
            <BottomNavigationItem
              label="Vehicles"
              icon={<i className="material-icons" style={styleColor}>flight</i>}
              onClick={() => this.select(4)}
            />
          </Link>
          <Link to={getPath('species')}>
            <BottomNavigationItem
              label="Species"
              icon={<i className="material-icons" style={styleColor}>person_pin</i>}
              onClick={() => this.select(5)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}
