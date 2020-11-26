<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function fetch_specific_blog($id)
    {
        $blog = Blog::find($id);
        return response()->json($blog);
    }

    public function getAllBlogs()
    {
        $all = Blog::all();
        return response()->json($all);
    }

    public function index()
    {
        return view('app');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $store = new Blog();
        $store->title = $request->title;
        $store->description = $request->description;
        $store->image = $request->image;
        $store->save();
        return response()->json(['success' => "Elave olundu"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $store =  Blog::find($id);
        $store->title = $request->title;
        $store->description = $request->description;
        $store->image = $request->image;
        $store->save();
        return response()->json(['success' => "Deyiwdirildi", 'id' => $store->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
