import * as React from 'react';

export namespace Avatar {
    export interface Props {
        iconKey?: string;
        item?: ActorType;
        size?: string;
    }
  
    export interface State {
    }
  }
  

export class Avatar extends React.Component<Avatar.Props, Avatar.State> {

    render() {
        const {iconKey, item} = this.props;
        if (item.hasOwnProperty(iconKey)) {
            switch (item[iconKey]) {
                case "male":
                    return <img className={"avatar " + this.props.size} src="https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png" />;
                case "female":
                    return <img className={"avatar " + this.props.size} src="https://icon-icons.com/icons2/318/PNG/512/Leia-icon_34495.png" />
                default:
                    return <img className={"avatar " + this.props.size} src="https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/R2D2-icon.png" />  
            }
        } else {
            switch (iconKey) {
                case "films":
                    return <img className={"avatar " + this.props.size} src="https://www.clipartkid.com/images/662/star-wars-logotipos-logos-gratuitos-clipartlogo-com-70pttz-clipart.png" /> ;
                case "planets":
                    return <img className={"avatar " + this.props.size} src="https://d30y9cdsu7xlg0.cloudfront.net/png/67850-200.png" />
                case "species":
                    return <img className={"avatar " + this.props.size} src="https://www.clipartkid.com/images/185/star-wars-vector-yoda-vector-yoda-shape-star-wars-shape-yoda-png-star-bQSODo-clipart.png" /> 
                case "starships":
                    return <img className={"avatar " + this.props.size} src="https://raddezigns.com/decal_pics/10484_Black.jpg" />  
                case "vehicles":
                    return <img className={"avatar " + this.props.size} src="https://piratevinyldecals.com/wps/wp-content/uploads/2014/04/Star-Wars-X-Wing-PV376.png" />  
                default:
                    return <img className={"avatar " + this.props.size} src="https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/R2D2-icon.png" />  
            }             
        }
    }
}