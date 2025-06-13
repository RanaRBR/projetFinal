<?php

namespace App\Http\Controllers;

use App\Models\Temoin;
use App\Http\Requests\StoreTemoinRequest;
use App\Http\Requests\UpdateTemoinRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TemoinController extends Controller
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
        $temoins=Temoin::all();
        return Inertia::render('createTemoin',[
            'temoins'=>$temoins
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $temoin=new Temoin();
        $temoin->nom= $request->nom;
        $temoin->pays= $request->pays;
        $temoin->temoignage= $request->temoignage;
        $temoin->save();
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Temoin $temoin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $temoin= Temoin::find($id);
        return Inertia::render('editTemoin', ['temoin'=>$temoin]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $temoin=Temoin::find($id);
        $temoin->nom= $request->nom;
        $temoin->pays= $request->pays;
        $temoin->temoignage= $request->temoignage;
        $temoin->save();
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $temoin=Temoin::find($id);
        $temoin->delete();

    }
}
