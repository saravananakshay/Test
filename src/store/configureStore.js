import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export function configureStore() {
    const enhancer = compose(
        applyMiddleware(logger),
        composeWithDevTools(applyMiddleware(logger))
    );

    const store = createStore(persistedReducer, enhancer);

    const persistor = persistStore(store);
    return { store, persistor };
}

export default configureStore;
