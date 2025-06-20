<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Article;
use App\Models\Contact;
use App\Models\Like;
use App\Models\Savoir;
use App\Models\Temoin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $abouts= About::all();
        $articles=Article::all();
        $temoins=Temoin::all();
        $savoirs=Savoir::all();
        $contacts=Contact::all();
        $likes=Like::all();
        return Inertia::render('welcome', [
            'abouts'=>$abouts,
            'articles'=>$articles,
            'temoins'=>$temoins,
            'savoirs'=>$savoirs,
            'contacts'=>$contacts,
            'likes'=>$likes,

        ]);

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
        $about=new About();
        $about->titre= $request->titre;
        $about->texte= $request->texte;
        $about->image= $request->image;
        $about->save();
        
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $about= About::find($id);
        return Inertia::render('details', ['about'=>$about]);


        $article = Article::find($id);

        return Inertia::render('ArticleDetails', [
        'article' => $article
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $about= About::find($id);
        return Inertia::render('editAbout', ['about'=>$about]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request  $request)
    {
        $about= About::find($id);
        $about->titre= $request->titre;
        $about->texte= $request->texte;
        $about->image= $request->image;
        $about->save();
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(About $about)
    {
        //
    }
}
