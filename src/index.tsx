import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from './containers/App';

const store: any = configureStore();
const history: any = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter basename="/React-TypeScript/">
          <Router history={history}>
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </Router>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
