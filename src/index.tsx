import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from './containers/App';

const store: any = configureStore();
const history: any = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <Router history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
