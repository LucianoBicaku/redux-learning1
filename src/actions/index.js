export const addFavourite = (newItem) => {
    return {
        type: 'ADD_FAVOURITE',
        newItem: newItem,
    }
}

// export const addFavourite = (newItem) => {
//     return {
//         type: 'REMOVE_FAVOURITE',
//         newItem: newItem,
//     }
// }
