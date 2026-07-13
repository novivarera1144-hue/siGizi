<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ScanController;
use App\Models\NutritionLog;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'logs' => NutritionLog::where('user_id', Auth::id())->latest()->take(5)->get()
        ]);
    })->name('dashboard');

    Route::post('/scan', [ScanController::class, 'scan'])->name('scan.food');
});

require __DIR__.'/settings.php';