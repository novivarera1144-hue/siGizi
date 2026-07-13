<?php

namespace App\Services;

use Gemini\Laravel\Facades\Gemini;

class GeminiService
{
    public static function analyzeFood($imagePath)
    {
        $fullPath = storage_path('app/public/' . $imagePath);
        $imageData = base64_encode(file_get_contents($fullPath));

        // Mengirimkan sebagai array asosiatif murni
        // Ini melewati validasi class yang sering error
        $result = Gemini::generativeModel('gemini-1.5-flash')
            ->generateContent([
                [
                    'text' => 'Analisis gambar makanan ini dan berikan informasi nutrisi dalam format JSON: {"food_name": "...", "calories": 0, "protein": 0, "fat": 0, "carbs": 0}'
                ],
                [
                    'inline_data' => [
                        'mime_type' => 'image/jpeg',
                        'data' => $imageData
                    ]
                ]
            ]);

        $text = $result->text();
        $text = str_replace(['```json', '```'], '', $text);

        return json_decode(trim($text), true);
    }
}