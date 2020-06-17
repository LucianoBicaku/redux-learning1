

const FavouritesReducer = (state = [{
    "id": 214146,
    "title": "La Yogurt Original Variety Pack Lowfat Yogurt - Strawberry & Peach Blended",
    "image": "https://spoonacular.com/productImages/214146-312x231.jpg",
    "imageType": "jpg"
}], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return [...state, action.newItem];
        default:
            return state;
    }
}

export default FavouritesReducer;