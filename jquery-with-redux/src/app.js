import { createStore, combineReducers } from 'redux'
import counterWidget from './widgets/counter'
import formWidget from './widgets/form'

const reducers = combineReducers({
  counter: counterWidget.reducer,
  form: formWidget.reducer,
})
const store = createStore(reducers)

// not that much of a fan with these inits, but not
// much we can do about it. better than nothing :)
counterWidget.init(store)
formWidget.init(store)
