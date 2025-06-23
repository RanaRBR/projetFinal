<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Http\Requests\StoreCategorieRequest;
use App\Http\Requests\UpdateCategorieRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateCategorie');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $categorie=new Categorie();
        $categorie->name= $request->name;
        $categorie->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Categorie $categorie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $categorie= Categorie::find($id);
        return Inertia::render('EditCategorie', ['categorie'=>$categorie]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $categorie=Categorie::find($id);
        $categorie->name= $request->name;
        $categorie->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categorie=Categorie::find($id);
        $categorie->delete();
    }
}
