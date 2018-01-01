import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Spinner, Avatar} from '../index';


export namespace EntityList {
  export interface Props {
    iconKey: string;
    items: ActorType[];
    pages: number;
    activePage: number;
    fetchDataByUrl?: (itemType) => void;
    fetchDataByPage?: (number) => void;
  }

  export interface State {
  }
}

export class EntityList extends React.Component<EntityList.Props, EntityList.State>  {

    createItems() {
        return <List className="entity-list">

                {this.props.items.map(item =>
                    <ListItem className="list-item"
                        onClick={() => this.props.fetchDataByUrl(item.url)}
                        key={item.name || item.title}
                        primaryText={item.name || item.title}
                        leftAvatar={<div><Avatar iconKey={this.props.iconKey} item={item} size="small" /></div>}
                        rightIcon={<MoreVertIcon />}
                        />
                )
                }
            </List>;

    }

    createPagination() {
        let buttons = [];
        for (let i = 1; i <= this.props.pages; i++) {
            buttons.push(
                <FloatingActionButton key={i}  mini={true} className="pageNo" onClick={() => this.props.fetchDataByPage(i)} >
                {i} 
                </FloatingActionButton>
            )
        }
        return (
            <div className="floatingButton">
                {this.props.activePage}
                {buttons}
                <span className='pageTip'>page</span>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Spinner show={this.props.items.length === 0} message={"May the force be with you..."}/>
                {this.createItems()}
                {this.createPagination()}
            </div>
        );
    }
}