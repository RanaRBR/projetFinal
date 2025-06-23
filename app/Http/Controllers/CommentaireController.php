<?php

namespace App\Http\Controllers;

use App\Models\Commentaire;
use App\Http\Requests\StoreCommentaireRequest;
use App\Http\Requests\UpdateCommentaireRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentaireController extends Controller
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
    
        public function store(Request $request, $articleId)
    {
    $commentaire = new Commentaire();
    $commentaire->name = auth()->user()->name;     
    $commentaire->commentaire = $request->commentaire;
    $commentaire->user_id = auth()->id();
    $commentaire->article_id = $articleId;
    $commentaire->save();
    }

    

    /**
     * Display the specified resource.
     */
    public function show(Commentaire $commentaire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit($id)
    {
    $commentaire = Commentaire::find($id);

   return Inertia::render('EditCommentaire', [
    'commentaire' => $commentaire,
]);

    }



    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, $id)
    {
    $commentaire = Commentaire::find($id);
    $commentaire->commentaire = $request->commentaire;
    $commentaire->save();
    }
    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id)
    {
    $commentaire = Commentaire::find($id);
    $commentaire->delete();
    }
}
