import * as React from 'react';
import * as StarWarsActions from '../../../actions/starwars-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {EntityList, EntityDetails} from '../../../components';


export namespace EntityContainer {
    export interface Props {
        items: ActorType[];
        selectedItem: ActorType;
        count: number;
        fetch: any;
        fetchByUrl: any;
        clearSelectedItem: any;
        category: string;
    }

    export interface State {
        activePage: number;
        drawerOpened: boolean;
    }
}

const EntityHOC = category => {

    class EntityContainer extends React.Component<EntityContainer.Props, EntityContainer.State> {
        constructor(props){
            super(props);
            this.state ={
                activePage: 1,
                drawerOpened: false
            }
        }
    
        componentWillMount() {
            this.fetchDataByPage(this.state.activePage);
        }
    
        fetchDataByPage = (page) => {
            this.setState({
                activePage:page
            });
            this.props.fetch(category, page)
        }
    
        fetchDataByUrl = (page) => {
            this.setState({drawerOpened: true})
            this.props.fetchByUrl(page)
        }
    
        handleCloseDrawer = () => {
            this.setState({drawerOpened: false})
            this.props.clearSelectedItem();
        }
        
        render() {
            return (
                <div>
                    <EntityList
                        activePage={this.state.activePage}
                        fetchDataByPage={this.fetchDataByPage}
                        fetchDataByUrl={this.fetchDataByUrl}
                        items={this.props.items}
                        pages={this.props.count/10}
                    />
                    <EntityDetails
                        item={this.props.selectedItem}
                        opened={this.state.drawerOpened}
                        closeDrawer={this.handleCloseDrawer}
                    />
                </div>
            );
        }
    }
    
    function mapStateToProps(state) {
        return {
            items: state.actors.items,
            selectedItem: state.actors.selectedItem,
            count: state.actors.count
        };
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            fetch: (category, page) => dispatch(StarWarsActions.fetchEntities(category, page)),
            fetchByUrl: (url) => dispatch(StarWarsActions.fetchByUrl(url)),
            clearSelectedItem: () => dispatch(StarWarsActions.clearSelectedItem())
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(EntityContainer);
}

export default EntityHOC;



