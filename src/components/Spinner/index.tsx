import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';


export namespace Spinner {
  export interface Props {
    message?: string,
    show?: boolean
  }

  export interface State {
  }
}

export class Spinner extends React.Component<Spinner.Props, Spinner.State> {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return this.props.show ?
      <div className="loader-bg">
        <CircularProgress size={75} thickness={8} />
        <h3>{this.props.message}</h3>
      </div>: null
  }
}
