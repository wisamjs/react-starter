import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from '../styles/customTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Spinner from '../components/Spinner';

import {fetchData} from '../actions/actions';

class App extends Component {

	componentWillMount() {
		this.props.fetchData();
	}

	render() {
		return (
			<MuiThemeProvider  muiTheme={getMuiTheme(customTheme)}>
			{
				this.props.loading ? <Spinner/> : this.props.children
			}
    	</MuiThemeProvider>
  	);
	}
}

function mapStateToProps({state}) {
  return {
  	loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (e) => dispatch(fetchData()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
