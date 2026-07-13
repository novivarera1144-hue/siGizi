<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\GeminiService;
use App\Models\NutritionLog;
use Illuminate\Support\Facades\Auth;

class ScanController extends Controller
{
    public function scan(Request $request)
    {
        try {
            // 1. Cek file
            if (!$request->hasFile('image')) {
                return response()->json(['error' => 'File tidak ditemukan'], 422);
            }

            // 2. Simpan file sementara
            $path = $request->file('image')->store('temp', 'public');

            // 3. Panggil AI Service
            $data = GeminiService::analyzeFood($path);

            // 4. Simpan ke Database
            NutritionLog::create([
                'user_id' => Auth::id(),
                'food_name' => $data['food_name'] ?? 'Unknown',
                'calories' => $data['calories'] ?? 0,
                'protein' => $data['protein'] ?? 0,
                'fat' => $data['fat'] ?? 0,
                'carbs' => $data['carbs'] ?? 0,
            ]);

            return back()->with('success', 'Berhasil!');
            
        } catch (\Exception $e) {
            // Ini akan muncul di tab Network -> Response jika terjadi error
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}