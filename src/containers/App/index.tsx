import * as React from 'react';
// import * as style from './style.css';
// import { RouteComponentProps } from 'react-router';
import {
  SiteHeader, NavigationBar, Spinner,
  Actors, Planets, Species, Movies, StarShips, Vehicles
} from '../../components';
import { Router, Route, Switch } from 'react-router';
import {getPath} from '../../utils/path-utils';

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
            <Route exact path={getPath()} component={Actors}/>
            <Route path={getPath("actors")} component={Actors}/>
            <Route path={getPath("films")} component={Movies}/>
            <Route path={getPath("starships")} component={StarShips}/>
            <Route path={getPath("planets")} component={Planets}/>
            <Route path={getPath("vehicles" )}component={Vehicles}/>
            <Route path={getPath("species")} component={Species}/>
          </Switch>
          <NavigationBar/>
      </div>
    );
  }
}

