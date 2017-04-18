<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\TaskRepository;
use Illuminate\Support\Facades\DB;

class SampleApiController extends Controller
{
    public function index()
    {

        // return \Response::json(['header'=>['code'=> '200', 'text' => 'index']]);
    }
  	

    public function getTasks(){

    	$inputs = DB::table('sampleapi')->get();

		foreach ($inputs as $input)
		{
   			 //var_dump ($user->name);
   			 // echo ($input->name);
		}
		return \Response::json($inputs);
    	
    }

    public function postTasks(Request $request){

    	$name = $request->input('name');

    	DB::table('sampleapi')->insert(array('name' => $name));
		
		return \Response::json($name);
    }


    public function deleteTasks(Request $request){

    	$id = $request->input('id');

    	DB::table('sampleapi')->where('id', '=', $id)->delete();

    	return \Response::json($id);
    }
  

}
