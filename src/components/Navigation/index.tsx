import * as React from 'react';
import { BottomNavigation, BottomNavigationItem , FontIcon} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import ActorsIconFile from 'material-ui/svg-icons/action/face';
import MoviesIconFile from 'material-ui/svg-icons/av/movie';
import StartShipsIconFile from 'material-ui/svg-icons/hardware/gamepad';
import PlanetsIconFile from 'material-ui/svg-icons/image/tonality';
import VehiclesIconFile from 'material-ui/svg-icons/action/flight-takeoff';
import SpeciesIconFile from 'material-ui/svg-icons/maps/person-pin'
import {getPath} from '../../utils/path-utils';

import { Link } from "react-router-dom";

const ActorsIcon = <ActorsIconFile/>;
const MoviesIcon = <MoviesIconFile/>;
const StartShipsIcon = <StartShipsIconFile/>;
const PlanetsIcon =  <PlanetsIconFile/>;
const VehiclesIcon = <VehiclesIconFile/>;
const SpeciesIcon = <SpeciesIconFile/>;


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
              icon={ActorsIcon}
              onClick={() => this.select(0)}
            />
          </Link>
          
          <Link to={getPath('films')}>
            <BottomNavigationItem
              label="Films"
              icon={MoviesIcon}
              onClick={() => this.select(1)}
            />
          </Link>

          <Link to={getPath('starships')}>
            <BottomNavigationItem
              label="Starships"
              icon={StartShipsIcon}
              onClick={() => this.select(2)}
            />
          </Link>

          <Link to={getPath('planets')}>
            <BottomNavigationItem
              label="Planets"
              icon={PlanetsIcon}
              onClick={() => this.select(3)}
            />
          </Link>

          <Link to={getPath('vehicles')}>
            <BottomNavigationItem
              label="Vehicles"
              icon={VehiclesIcon}
              onClick={() => this.select(4)}
            />
          </Link>
          <Link to={getPath('species')}>
            <BottomNavigationItem
              label="Species"
              icon={SpeciesIcon}
              onClick={() => this.select(5)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}
