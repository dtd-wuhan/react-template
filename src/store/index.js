import { configureStore } from 'redux-toolkit'
import createSagaMiddleware from 'redux-saga';
import * as rootReducer from '../reducers'
import * as rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store