import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";

const initaialState = {
    places: [], 
    selectedPlace: null
};

const reducer = (state= initaialState, action) => {
    switch(action.type){
        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: {
                      uri: "https://source.unsplash.com/WLUHO9A_xik/1600x900"
                    }
                })
            };
        case DELETE_PLACE: 
            return {
                ...state, 
                places : state.places.filter((place, i) => {
                    return place.key !== state.selectedPlace.key
                }), 
                selectedPlace: null
            }
        default: 
            return state
    }
}

export default reducer
