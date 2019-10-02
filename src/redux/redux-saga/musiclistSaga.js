import * as action_type from './../actions/MusicList/ActionTypes';
import { connect } from 'react-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import API from './../../libs/api';

function* getAllPlaylist(action) {
    try {
        yield put({ type: action_type.IS_FETCHING })
        const data = yield API.getAllPlaylist(action.subcategoryId);
        yield put({ type: action_type.API_GET_ALLPLAYLIST_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_GET_ALLPLAYLIST_FAIL, data: e })
    }
}
function* addSongstoUserList(action) {
    try {
        console.log('action.playlistId', action.data);
        yield put({ type: action_type.ADDSONGTOPLAYLIST_LOCAL, playlistId: action.playlistId })
        const data = yield API.addSongstoUserList(action.data);
        yield put({ type: action_type.API_GET_USERPLAYLIST_ID_FETCH })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_ADDSONGTOPLAYLIST_FAIL, data: e })
    }
}
function* deleteUserPlaylist(action) {
    try {
        console.log('musiclist redux-->', action.playlistId);
        yield put({ type: action_type.DELETEUSERPLAYLIST_LOCAL, playlistId: action.playlistId })
        const data = yield API.deleteUserPlaylist({ playlistId: action.playlistId });
        yield put({ type: action_type.API_GET_USERPLAYLIST_ID_FETCH })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_DELETEUSERPLAYLIST_FAIL, data: e })
    }
}

function* getLikedAlbum(action) {
    try {
        console.log('getliked', action);
        const data = yield API.getLikedAlbum();
        yield put({ type: action_type.API_GETLIKEDALBUM_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_GETLIKEDALBUM_FAIL, data: e })
    }
}
function* deleteLikesAlbum(action) {
    try {
        // yield put({ type: action_type.IS_LIKEDALBUM_FETCHING })
        yield put({ type: action_type.DELETETOLIKEDALBUM_LOCAL, subcategoryId: action.subcategoryId })
        yield API.deleteLikesAlbum({ subcategoryId: action.subcategoryId });
        yield put({ type: action_type.API_GETLIKEDALBUM_FETCH })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_GETLIKEDALBUM_FAIL, data: e })
    }
}
function* addLikesAlbum(action) {
    try {
        // yield put({ type: action_type.IS_LIKEDALBUM_FETCHING })
        yield put({ type: action_type.ADDTOLIKEDALBUM_LOCAL, subcategoryId: action.subcategoryId })
        yield API.addLikesAlbum({ subcategoryId: action.subcategoryId });
        yield put({ type: action_type.API_GETLIKEDALBUM_FETCH })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_GETLIKEDALBUM_FETCH, data: e })
    }
}
function* getUserPlaylistId(action) {
    try {
        const data = yield API.getUserPlaylistId();
        yield put({ type: action_type.API_GET_USERPLAYLIST_ID_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.API_GET_USERPLAYLIST_ID_FAIL, data: e })
    }
}

export const musiclistSaga = [
    takeEvery(action_type.API_GET_ALLPLAYLIST_FETCH, getAllPlaylist),
    takeEvery(action_type.API_ADDSONGTOPLAYLIST_FETCH, addSongstoUserList),
    takeEvery(action_type.API_DELETEUSERPLAYLIST_FETCH, deleteUserPlaylist),
    takeEvery(action_type.API_GETLIKEDALBUM_FETCH, getLikedAlbum),
    takeEvery(action_type.API_DELETELIKEDALBUM_FETCH, deleteLikesAlbum),
    takeEvery(action_type.API_ADDLIKEDALBUM_FETCH, addLikesAlbum),
    takeEvery(action_type.API_GET_USERPLAYLIST_ID_FETCH, getUserPlaylistId),
]