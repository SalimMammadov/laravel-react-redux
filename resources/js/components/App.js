import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import "../css/App.css";
import { Provider } from "react-redux";
import configureStore from "../redux/reducers/configureStore";
import Blogs from "./Blogs";
import AddOrUpdateBlog from "./AddOrUpdateBlog";
import swal from "sweetalert";

function App({ location }) {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <React.Fragment>
                    <div className="container">
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/blogs">
                            <Blogs></Blogs>
                        </Route>
                        <Route exact path="/saveblog/:blogId">
                            <AddOrUpdateBlog></AddOrUpdateBlog>
                        </Route>
                        <Route exact path="/saveblog">
                            <AddOrUpdateBlog></AddOrUpdateBlog>
                        </Route>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}
const store = configureStore();

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
