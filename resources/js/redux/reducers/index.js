const { combineReducers } = require("redux");
import postsReducer from "../reducers/postsReducer";
import blogsReducer from "../reducers/blogsReducer";

const rootReducer = combineReducers({
    postsReducer,
    blogsReducer
});

export default rootReducer;
