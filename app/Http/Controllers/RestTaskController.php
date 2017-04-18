<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class RestTaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request)
    {
        return view('welcome');
    }
    public function getTasks(){
    	return "test";
    }
}