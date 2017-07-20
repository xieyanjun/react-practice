import React from 'react';
import dva, { connect } from 'dva';
import classnames from 'classnames';
import compose from 'lodash/fp/compose';
import styles from './Example.css';

function mapStateToProps(state) {
  return { count: state.count };
}

const Example =({count, dispatch}) => {
  return(
  <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/minus'}); }}>+</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Example);
