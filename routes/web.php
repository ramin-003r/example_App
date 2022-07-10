<?php

use App\Http\Controllers\TodoController;
use App\Models\Todo;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('create');
});

Route::get('/about', function () {
    return ('ramin');
});

Route::get('/r_m', function () {
    return view('manage.todo.index');
});

Route::get('/todo', [TodoController::class, "list"]);

Route::get('/user/{id}', [TodoController::class, "showUser"])
    ->middleware(['test', 'test2', 'test3']);

Route::get('/todos', [TodoController::class, "list"]);

Route::get('/delete/{id}', [TodoController::class, "delete"]);

Route::get('/todos/create', [TodoController::class, 'makeView']);
Route::post('/todos/create', [TodoController::class, 'makeAPI'])->name('todo.makeAPI');

//route::get('/show/id', [TodoController::class, 'show']);
//Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/todo/edit/{todo}', [TodoController::class, 'edit']);
Route::get('/todo/update/{todo}', [TodoController::class, 'update']);