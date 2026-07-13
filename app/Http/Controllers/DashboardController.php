<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $logs = \App\Models\NutritionLog::where('user_id', auth()->id())
            ->latest()
            ->take(5) // Ambil 5 riwayat terakhir
            ->get();

    return inertia('Dashboard', [
        'logs' => $logs
    ]);
}
        
       
}