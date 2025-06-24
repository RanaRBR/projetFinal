<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SavoirController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TemoinController;
use App\Http\Controllers\UserController;
use App\Models\About;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AboutController::class, 'index'])->name('home');

Route::get('/article/{id}', [ArticleController::class, 'show']);
Route::get('/articles', [ArticleController::class, 'all']);


Route::get('/politique-confidentialite', function () {
    return Inertia::render('PolitiqueConfidentialite');
})->name('politique.confidentialite');


Route::middleware(['auth', 'verified'])->group(function () {

    Route::post('/articles/{article}/commentaires', [CommentaireController::class, 'store']);
    Route::get('/commentaire/edit/{id}',[CommentaireController::class,'edit']);
    Route::put('/commentaire/update/{id}',[CommentaireController::class,'update']);
    Route::delete('/commentaire/delete/{id}',[CommentaireController::class,'destroy']);

    Route::get('/create/about', [AboutController::class, 'create']);
    Route::get('/edit/about/{id}', [AboutController::class, 'edit']);
    Route::put('/update/about/{id}', [AboutController::class, 'update']);

    Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');
    Route::get('/create/article', [ArticleController::class, 'create']);
    Route::get('/edit/article/{id}', [ArticleController::class, 'edit']);
    Route::put('/update/article/{id}', [ArticleController::class, 'update']);

    Route::get('/create/temoin', [TemoinController::class, 'create']);
    Route::get('/edit/temoin/{id}', [TemoinController::class, 'edit']);
    Route::put('/update/temoin/{id}', [TemoinController::class, 'update']);

    Route::get('/create/savoir', [SavoirController::class, 'create']);
    Route::get('/edit/savoir/{id}', [SavoirController::class, 'edit']);
    Route::put('/update/savoir/{id}', [SavoirController::class, 'update']);

    Route::post('/post/contact', [ContactController::class, 'store']);
    Route::get('/create/contact', [ContactController::class, 'create']);
    Route::get('/edit/contact/{id}', [ContactController::class, 'edit']);
    Route::put('/update/contact/{id}', [ContactController::class, 'update']);
    Route::delete('/delete/contact/{id}', [ContactController::class, 'destroy']);

    Route::post('/categorie', [CategorieController::class, 'store']);
    Route::get('/create/categorie', [CategorieController::class, 'create']);
    Route::get('/edit/categorie/{id}', [CategorieController::class, 'edit']);
    Route::put('/update/categorie/{id}', [CategorieController::class, 'update']);
    Route::delete('/delete/categorie/{id}', [CategorieController::class, 'destroy']);
    
    Route::post('/likes', [LikeController::class, 'store']);
    Route::delete('/likes/{article}', [LikeController::class, 'destroy']);

    Route::post('/role', [RoleController::class, 'store']);
    Route::get('/create/role', [RoleController::class, 'create']);
    Route::get('/edit/role/{id}', [RoleController::class, 'edit']);
    Route::put('/update/role/{id}', [RoleController::class, 'update']);
    Route::delete('/delete/role/{id}', [RoleController::class, 'destroy']);



    //mail

    Route::post('/send-email', [ContactController::class, 'sendContactForm']);


    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('articles', ArticleController::class)->except(['show']);
    Route::resource('categories', CategorieController::class)->except(['show']);
    Route::resource('tags', TagController::class)->except(['show']);
    Route::get('/tags', [TagController::class, 'index']);
    Route::post('/tags', [TagController::class, 'store']);
    Route::get('/tags/create', [TagController::class, 'create']);



    Route::middleware('role:admin')->group(function () {
        Route::resource('users', UserController::class)->except(['show']);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
