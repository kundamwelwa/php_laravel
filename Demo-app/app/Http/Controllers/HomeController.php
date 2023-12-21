<?php
// app/Http/Controllers/HomeController.php
namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'name' => 'John Doe', // Pass any data you want to the React component
        ]);
    }
}

