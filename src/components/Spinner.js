import React, {PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = ({style = {}}) => (
  <div>
    <CircularProgress 
    size={80} 
    thickness={5}
    style={style} />
  </div>
);


Spinner.defaultName = 'Spinner';
Spinner.propTypes = {
  style: PropTypes.object,
}

export default Spinner;