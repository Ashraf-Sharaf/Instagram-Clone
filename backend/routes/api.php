<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

Route::controller(UserController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::get('getuser','getUser');
    
 
});
Route::post('updateUser',[UserController::class,'updateUser']);


Route::post('addPost',[PostController::class,'addPost']);
Route::post('getPosts',[PostController::class,"getPosts"]);



