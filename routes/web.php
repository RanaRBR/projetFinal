<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\SavoirController;
use App\Http\Controllers\TemoinController;
use App\Models\About;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AboutController::class, 'index'])->name('home');
// Route::get('/', [ArticleController::class, 'index'])->name('home');

Route::get('/article/{id}', [ArticleController::class, 'show']);
Route::get('/articles', [ArticleController::class, 'all']);


Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');

    Route::post('/likes', [LikeController::class, 'store']);
    Route::delete('/likes/{article}', [LikeController::class, 'destroy']);


    Route::post('/articles/{article}/commentaires', [CommentaireController::class, 'store']);
    Route::get('/commentaire/edit/{id}',[CommentaireController::class,'edit']);
    Route::put('/commentaire/update/{id}',[CommentaireController::class,'update']);
    Route::delete('/commentaire/delete/{id}',[CommentaireController::class,'destroy']);

    
    Route::get('/create/about', [AboutController::class, 'create']);
    Route::get('/edit/about/{id}', [AboutController::class, 'edit']);
    Route::put('/update/about/{id}', [AboutController::class, 'update']);

    
    Route::get('/create/article', [ArticleController::class, 'create']);
    Route::get('/edit/article/{id}', [ArticleController::class, 'edit']);
    Route::put('/update/article/{id}', [ArticleController::class, 'update']);

    Route::get('/create/temoin', [TemoinController::class, 'create']);
    Route::get('/edit/temoin/{id}', [TemoinController::class, 'edit']);
    Route::put('/update/temoin/{id}', [TemoinController::class, 'update']);

    Route::get('/create/savoir', [SavoirController::class, 'create']);
    Route::get('/edit/savoir/{id}', [SavoirController::class, 'edit']);
    Route::put('/update/savoir/{id}', [SavoirController::class, 'update']);

    Route::get('/create/contact', [ContactController::class, 'create']);
    Route::get('/edit/contact/{id}', [ContactController::class, 'edit']);
    Route::put('/update/contact/{id}', [ContactController::class, 'update']);
    Route::delete('/delete/contact/{id}', [ContactController::class, 'destroy']);
    Route::post('/post/contact', [ContactController::class, 'store']);


    //mail

    Route::post('/send-email', [ContactController::class, 'sendContactForm']);

    
    Route::get('dashboard', function () {
        $abouts = About::all();
        return Inertia::render('dashboard', ['abouts' => $abouts]);
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
