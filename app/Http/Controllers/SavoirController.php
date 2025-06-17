<?php

namespace App\Http\Controllers;

use App\Models\Savoir;
use App\Http\Requests\StoreSavoirRequest;
use App\Http\Requests\UpdateSavoirRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SavoirController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $savoirs = Savoir::all();
        return Inertia::render('welcome', [
        'savoirs' => $savoirs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createSavoir');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $savoir = new Savoir();
        $savoir->titre = $request->titre;
        $savoir->info = $request->info;
        $savoir->savoir_id = $request->savoir_id;
        $savoir->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Savoir $savoir)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $savoir = Savoir::find($id);
        return Inertia::render('editSavoir', ['savoir' => $savoir]);
    }

    

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $savoir = Savoir::find($id);
        $savoir->titre = $request->titre;
        $savoir->info = $request->info;
        $savoir->savoir_id = $request->savoir_id;
        $savoir->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $savoir = Savoir::find($id);
        $savoir->delete();
    }
}
