import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './combineReducer'
import sagas from '../sagas'

// export default createStore(
    
// )
export default function configureStore (initialState) {
    const sagaMiddleware = createSagaMiddleware()
    
    function _getMiddleware () {
      const middleware = [
        sagaMiddleware
      ]
  
      return applyMiddleware(...middleware)
    }
    const composeEnhancers =
      typeof window === 'object' && process.env.NODE_ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  
    const store = composeEnhancers(_getMiddleware())(createStore)(
      rootReducer,
      initialState
    )
    
    sagaMiddleware.run(sagas)
  
    if (module.hot) {
      module.hot.accept(rootReducer, () => {
        store.replaceReducer(rootReducer.default)
      })
    }
  
    return store
  }
