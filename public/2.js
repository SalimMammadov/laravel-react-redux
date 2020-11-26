(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/css/Post.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/css/Post.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".posts{\n    margin-top:30px;\n    margin-bottom:50px;\n}\n.post__title{\n    font-weight: 800;\n\n}\n.post__title{\n    font-size:20px !important;\n}\n.list__container {\n    display:flex;\n    flex : 0.95\n}\n\n.list__button{\n    margin-right: auto\n}\n.list__info{\n    display: flex;\n    flex-direction: column;\n}\n.post__image{\n    margin-right:10px;\n    height:100px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Post.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Post.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/Post.css */ "./resources/js/css/Post.css");
/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Post_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_postsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/postsActions */ "./resources/js/redux/actions/postsActions.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);






function Post(_ref) {
  var post = _ref.post,
      dispatch = _ref.dispatch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list__container list-group-item  list-group-item list-group-item-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "post__image",
    src: post.image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__title"
  }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__description"
  }, post.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_postsActions__WEBPACK_IMPORTED_MODULE_3__["deletePost"])(post.id));
    },
    className: "list__button btn btn-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-trash"
  }, "Delete")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Post));

/***/ }),

/***/ "./resources/js/components/Posts.js":
/*!******************************************!*\
  !*** ./resources/js/components/Posts.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./resources/js/components/Post.js");
/* harmony import */ var _redux_actions_postsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/postsActions */ "./resources/js/redux/actions/postsActions.js");
/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Post.css */ "./resources/js/css/Post.css");
/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Post_css__WEBPACK_IMPORTED_MODULE_4__);






function Posts(_ref) {
  var posts = _ref.posts,
      getPosts = _ref.getPosts;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPosts();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "posts",
    style: {
      width: "100%"
    }
  }, posts.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
      post: item,
      key: item.id
    });
  })));
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer
  };
}

var mapDispatchToProps = {
  getPosts: _redux_actions_postsActions__WEBPACK_IMPORTED_MODULE_3__["getPosts"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Posts));

/***/ }),

/***/ "./resources/js/css/Post.css":
/*!***********************************!*\
  !*** ./resources/js/css/Post.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!./Post.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/css/Post.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);