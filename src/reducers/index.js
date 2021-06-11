import { combineReducers } from 'redux';


//Reducers 1) Song list reducer and 2) Selected song reducer

const songsReducer = () => {
    return [
        { title: 'Numb', duration: '4:05' },
        { title: 'In the end', duration: '3:45' },
        { title: 'Castle of glass', duration: '1:45' },
        { title: 'Breaking the habbit', duration: '2:45' }
    ];
};

const selectedSongReducer = (selectedSong = NULL, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});