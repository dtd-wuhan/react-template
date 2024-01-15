import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/studentReducer'
import asyncReducer from '../reducers/asyncReducer'
import modalReducer from '../reducers/modalReducer'

const persistConfig = {
    key: "root",
    storage,
    whiteList: ['rootReducer']
}

const reducer = combineReducers({
    root: rootReducer,
    async: asyncReducer,
    modal: modalReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

const persistor = persistStore(store)

export { store, persistor }