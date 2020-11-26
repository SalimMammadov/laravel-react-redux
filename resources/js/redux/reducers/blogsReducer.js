const initialState = {
    blogs: []
};

export default function blogsReducer(state = initialState.blogs, action) {
    switch (action.type) {
        case "GET_BLOGS":
            return action.payload;
        default:
            return state;
    }
}
