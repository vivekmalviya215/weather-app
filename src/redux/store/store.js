
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducer/rootReducers'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

sagaMiddleware.run(rootSaga)
export default store;