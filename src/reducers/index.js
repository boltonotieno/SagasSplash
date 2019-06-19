import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import imageReducer from "./imagesReducer";
import pageReducer from "./pageReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    nextPage: pageReducer,
    error: errorReducer,
})

export default rootReducer;
