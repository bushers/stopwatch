import * as React from 'react';
import { AppProps, inAppState, inAppInitialState } from './StateAndProps';
import { ACTIONS } from './Actions';
import * as _ from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage';


export const STATE_KEY = 'app';

class App extends React.Component<AppProps, inAppState>{
    constructor(props:AppProps) {
        super(props);
        this.state = inAppInitialState;
    }

    render() {
        let state = this.state,
            props = this.props;

        return (
            <div className={`app`}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        appState: state.app
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({loadData: ACTIONS.DATA_LOADED}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);