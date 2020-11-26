<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::resource('/posts', "PostsController");
Route::resource('/blogs', "BlogController");
Route::get('/all/blogs', 'BlogController@getAllBlogs');
Route::get('/fetch/specificblog/{id}', 'BlogController@fetch_specific_blog');
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
