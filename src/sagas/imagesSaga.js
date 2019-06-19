import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../constants"
import fetchImages from "../api"
import { setImages, setError } from "../actions"

export const getPage = state => state.nextPage;

// Worker saga
export function* handleImageLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page)
        if(images.errors){
            yield put(setError(images.errors.toString()))
        } else{
            yield put(setImages(images))
        }
    } catch (errors) {
        yield put(setError(errors.toString()))
    }

}

// Watcher Saga
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImageLoad)
}