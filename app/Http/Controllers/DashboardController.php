<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Categorie;
use App\Models\Role;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard', [
            'categories' => Categorie::all(),
            'tags' => Tag::all(),
            'roles' => Role::all(),
            'articles' => Article::all(),
        ]);
    }
}
