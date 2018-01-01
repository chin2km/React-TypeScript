import * as React from 'react';
// import * as style from './style.css';
// import { RouteComponentProps } from 'react-router';
import {
  SiteHeader, NavigationBar, Spinner,
  Actors, Planets, Species, Movies, StarShips, Vehicles
} from '../../components';
import { Router, Route, Switch } from 'react-router';

import './style.less';

export namespace App {
  export interface Props {
  }

  export interface State {
  }
}

export class App extends React.Component<App.Props, App.State> {
  render() {
    const {children} = this.props;

    return (
      <div className={'main'}>
          <SiteHeader/>
          <Switch>
            <Route exact path="/" component={Actors}/>
            <Route path="/actors" component={Actors}/>
            <Route path="/films" component={Movies}/>
            <Route path="/starships" component={StarShips}/>
            <Route path="/planets" component={Planets}/>
            <Route path="/vehicles" component={Vehicles}/>
            <Route path="/species" component={Species}/>
          </Switch>
          <NavigationBar/>
      </div>
    );
  }
}

