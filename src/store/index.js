import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import watchImagesLoad from "../sagas"

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        ),
    );
    sagaMiddleware.run(watchImagesLoad)
    return store;
}

export default configureStore;