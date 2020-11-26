const initialState = {
    posts: []
};

export default function postsReducer(state = initialState.posts, action) {
    switch (action.type) {
        case "GET_POSTS":
            return action.payload;
        case "ADD_POST":
            return [action.payload,...state];
            case "DELETE_POST":
                const newstate = state.filter(item => item.id !== action.payload)
                console.log(newstate)
                return newstate
        default:
            return state;
    }
}
