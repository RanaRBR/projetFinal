<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\UpdateLikeRequest;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'article_id' => 'required|exists:articles,id',
    ]);

    Like::firstOrCreate([
        'user_id' => $request->user()->id,
        'article_id' => $request->article_id,
    ]);

    return back();
}
    /**
     * Display the specified resource.
     */
    public function show($id)
{
    $article = Article::with(['tags', 'likes'])->find($id);

    return Inertia::render('ArticleDetails', [
        'article' => $article,
        'auth_user_id' => auth()->id(),
    ]);
}


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Like $like)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLikeRequest $request, Like $like)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy($id)
    // {
    //     $like = Like::find($id);
    //     $like->delete();
    // }


    public function destroy($articleId)
{
    $like = Like::where('user_id', auth()->id())
        ->where('article_id', $articleId)
        ->first();

    if ($like) {
        $like->delete();
    }

    return back();
}
    
}
