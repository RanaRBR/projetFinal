<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
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
   public function create(Request $request)
    {
    return Inertia::render('CreateTag', [
        'article_id' => $request->query('article_id'), // récupère article_id dans l'URL
    ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'article_id' => 'required|exists:articles,id',
        ]);

        // créer le tag
        $tag = Tag::create(['name' => $request->name]);

        $article = Article::find($request->article_id);
        $article->tags()->attach($tag->id);

        return redirect()->route('articles.show', $request->article_id);
    }



    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $tag = Tag::find($id);
        $article_id = $tag->articles()->first()->id ?? null;
        return Inertia::render('EditTag', ['tag' => $tag, 'article_id' => $article_id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $tag = Tag::find($id);
        $tag->name = $request->name;
        $tag->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->articles()->detach();
        $tag->delete();
        return redirect()->back();
    }
}
