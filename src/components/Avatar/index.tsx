import * as React from 'react';

export namespace Avatar {
    export interface Props {
        gender?: string;
        size?: string;
    }
  
    export interface State {
    }
  }
  

export class Avatar extends React.Component<Avatar.Props, Avatar.State> {

    render() {

        switch (this.props.gender) {
            case "male":
                return <img className={"avatar " + this.props.size} src="https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png" />;
            case "female":
                return <img className={"avatar " + this.props.size} src="https://icon-icons.com/icons2/318/PNG/512/Leia-icon_34495.png" />
            default:
                return <img className={"avatar " + this.props.size} src="https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/R2D2-icon.png" />  
        }
    }
}