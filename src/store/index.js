import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        ),
    );
    return store;
}

export default configureStore;