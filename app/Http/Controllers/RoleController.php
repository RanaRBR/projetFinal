<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
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
        $role=new Role();
        $role->name= $request->name;
        $role->email= $request->email;
        $role->password= $request->password;
        $role->save();

    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        
        $role= Role::find($id);
        return Inertia::render('EditRole', ['role'=>$role]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $role=Role::find($id);
        $role->name= $request->name;
        $role->email= $request->email;
        $role->password= $request->password;        
        $role->save();
    }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id)
{
    $role = Role::find($id);
    $role->delete();

}
}
