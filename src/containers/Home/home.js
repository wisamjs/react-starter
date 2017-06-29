import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const Home = () => {
  const style = {
    width: '46%',
    height: '100%',
    margin: '0 1%',
  }

  return (
    <Paper style={style}>
      <h1>Hello there</h1>
     
    </Paper>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
