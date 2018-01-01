import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Spinner, Avatar} from '../index';


export namespace EntityDetails {
    export interface Props {
        iconKey: string;
        item ?: ActorType;
        opened ?: boolean;
        closeDrawer?: (boolean) => void;
        fetchDataByUrl?: (string) => void;
    }
  
    export interface State {

    }
  }

export class EntityDetails extends React.Component<EntityDetails.Props, EntityDetails.State> {
    constructor(props) {
        super(props);
    }

    generateItemData = (item) => {
        return <div>
            {
                Object.keys(item).map(key => {
                    if(typeof item[key] === 'string') {
                        return <h3 key={key}> {key} : {item[key]}</h3>;
                    } else if (Array.isArray(item[key])) {
                        return <div key={key}>
                            <h3> {key} : </h3>
                            {
                                item[key].map(val => {
                                    return <a key={val} onClick={() => this.props.fetchDataByUrl(val)}> {val} </a>
                                })
                            }
                        </div>
                    }
                })
            }
        </div>
    }

    render() {
        const {item, opened, closeDrawer} = this.props;
        return (
            <div>
                <div>
                    <Drawer docked={false} width={400} 
                        openSecondary={true} 
                        open={opened} >

                        <AppBar
                            onClick={() => closeDrawer(false)}
                            iconElementLeft={
                                <IconButton >
                                <NavigationClose />
                                </IconButton>
                            }
                            title="back to the dark side"
                        />

                        
                        <div className="darkBg">
                            {item?
                                <div className="detailed">

                                    <Avatar iconKey={this.props.iconKey} item={item} size="big"/>

                                    {this.generateItemData(item)}
                                </div>
                                :<Spinner show={true} message="" />
                            }
                        </div>
        
                    </Drawer>
                </div>
            </div>
        );

    }
}