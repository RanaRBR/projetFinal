<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ContactController;
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

    
    //mail

    Route::post('/send-email', [ContactController::class, 'sendContactForm']);

    
    Route::get('dashboard', function () {
        $abouts = About::all();
        return Inertia::render('dashboard', ['abouts' => $abouts]);
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
