import React from 'react';
import { Link } from 'react-router';
import compose from 'lodash/fp/compose';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}
console.log(mapStateToProps);

// Action Creator
const increaseAction = { type: 'increase' }


// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return{
    onIncreaseClick: () => dispatch(increaseAction)
    }
}

const Counter =({value,onIncreaseClick}) => {
  return(
  <div>
    <span>{value}</span>
    <button onClick={onIncreaseClick}>Increase</button>
  </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter); 
