<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikeController;
use App\http\Controllers\CommentController;

Route::controller(UserController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::get('getuser','getUser');
    
 
});
Route::post('updateUser',[UserController::class,'updateUser']);


Route::post('create_post',[PostController::class,'create_post']);
Route::get('get_posts',[PostController::class,'get_posts']);
Route::post('likes',[PostController::class,'likes']);
Route::post('comments',[PostController::class,'comments']);



Route::post('like_post',[LikeController::class,'like_post']);

Route::post('comment_post',[CommentController::class,'comment_post']);
