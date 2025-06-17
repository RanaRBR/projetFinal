<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('welcome', [
            'articles' => $articles
        ]);
    }

    public function all()
{
    $articles = Article::all();
    return Inertia::render('articlesListe', [
        'articles' => $articles
    ]);
}

// public function all(Request $request)
// {
//     $search = $request->input('search');          // recherche texte
//     $localisation = $request->input('localisation');  // filtre localisation

//     $query = Article::query();

//     if ($search) {
//         $query->where('titre', 'like', '%' . $search . '%');
//     }

//     if ($localisation) {
//         $query->where('localisation', $localisation);
//     }

//     $articles = $query->get();

//     return Inertia::render('articlesListe', [
//         'articles' => $articles,
//         'filters' => [
//             'search' => $search,
//             'localisation' => $localisation,
//         ],
//     ]);
// }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createArticle');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = new Article();
        $article->titre = $request->titre;
        $article->paragraphe = $request->paragraphe;
        $article->date = $request->date;
        $article->photo = $request->photo;
        $article->auteur = $request->auteur;
        $article->localisation=$request->localisation;
        $article->article_id = $request->article_id;
        $article->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Article::findOrFail($id);

        return Inertia::render('articleDetails', ['article' => $article]);
    }


    public function edit($id)
    {
        $article = Article::find($id);
        return Inertia::render('editArticle', ['article' => $article]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $article = Article::find($id);
        $article->titre = $request->titre;
        $article->paragraphe = $request->paragraphe;
        $article->date = $request->date;
        $article->photo = $request->photo;
        $article->auteur = $request->auteur;
        $article->localisation=$request->localisation;
        $article->article_id = $request->article_id;
        $article->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Article::find($id);
        $article->delete();
    }
}
