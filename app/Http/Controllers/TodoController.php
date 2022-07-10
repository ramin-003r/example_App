<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    //
    public function list()
    {
        $todos = todo::query()->get()->all();
        return view('list', ['todos' => $todos]);
    }

    public function showUser($id)
    {
        return $id;
    }

    public function delete($id)
    {
        todo::find($id)->delete();
    }

    public function makeView()
    {
        return view("create");
    }

    public function makeAPI(Request $request)
    {
        // $request->input('title')
        DB::table("todos")->insert([
            [
                "title" => $request->input('title'),
                "description" => $request->input('description'),
                "status" => 123456,
            ],
        ]);
    }
    public function edit(Todo $todo){
        dd($todo);
    }

    public function update(){
        dd('from update');
    }
}
