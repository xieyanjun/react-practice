import react from 'react';
import Counter from '../Components/Message/Message.js';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}
// Store
const store = createStore(counter)
const Counters = () => {
  return (
    <div>
    <Provider  store={store}>
      <Counter />
    </Provider>
    </div>
    );
}

export default Counters;