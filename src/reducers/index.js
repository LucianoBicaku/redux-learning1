import FavouriteReducer from './Favourites'
import { combineReducers } from 'redux'


const allReducers = combineReducers({
    favourites: FavouriteReducer
});

export default allReducers;