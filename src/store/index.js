import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'
import asyncReducer from '../reducers/asyncReducer'

const persistConfig = {
    key: "root",
    storage,
}

const reducer = combineReducers({
    root: rootReducer,
    async: asyncReducer
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