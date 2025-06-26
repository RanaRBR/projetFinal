<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
//    public function index()
//     {
//     $articles = Article::with('tags')->get();

//     return Inertia::render('articlesListe', [
//         'articles' => $articles,
//     ]);
//     }
    public function index()
    {

    return Inertia::render('articlesListe', [
    'articles' => Article::all(),
    'categories' => Categorie::all(),
]);

    }

//     public function all()
// {
//     $articles = Article::all();
//     return Inertia::render('articlesListe', [
//         'articles' => $articles
//     ]);
// }

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
    return Inertia::render('CreateArticle', [
        'categories' => Categorie::all(),
    ]);
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
        $article->local=$request->local;
        $article->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Article::with('tags', 'commentaires')->findOrFail($id);
        return Inertia::render('articleDetails', ['article' => $article]);
    }


    public function edit($id)
    {
        $article = Article::find($id);
        return Inertia::render('EditArticle', ['article' => $article]);
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
        $article->local=$request->local;
        $article->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    $article = Article::findOrFail($id);

    $article->likes()->delete();

    $article->commentaires()->delete();

    $article->tags()->detach();

    $article->delete();

    return redirect()->route('dashboard')->with('success', 'Article supprimé avec succès.');
}

}
