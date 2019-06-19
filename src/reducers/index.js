import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import imageReducer from "./imagesReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
})

export default rootReducer;
