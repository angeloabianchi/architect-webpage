<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    
    public function findAll(Request $request)
    {
        $projects = $request->all();
        return response()->json($projects);
    }

}
