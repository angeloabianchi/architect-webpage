<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;


class ProjectsController extends Controller
{
    
    public function findAll()
    {
        $projects = Project::all();
        return response()->json($projects, 200);
    }

    public function index(Request $req)
    {
        echo "Something else";
    }

}
