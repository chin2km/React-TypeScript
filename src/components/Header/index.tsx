import * as React from 'react';

export namespace SiteHeader {
  export interface Props {
  }

  export interface State {
  }
}

export class SiteHeader extends React.Component<SiteHeader.Props, SiteHeader.State>  {
    render() {
        return (
            <h1 className="site-title" >
                The Dark Side - ¯\_(ツ)_/¯
            </h1>
        );
    }
}