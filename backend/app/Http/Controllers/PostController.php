<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;

class PostController extends Controller
{
    // public function addPost(Request $request)
    // {
    //     if ($request->hasFile('post_image')) {
    //         $file = $request->file('post_image');
    //         $extension = $file->getClientOriginalExtension();
    //         $filename = time() . '.' . $extension;
    //         $file->move(public_path('/post_pictures/'), $filename);
    //     }


    //     $request->validate([
    //         'caption' => 'string',
    //         'image' => 'required|image',
    //     ]);

    //     $user = Auth::user();
    //     if ($user) {
    //         $post = Post::create([
    //             'caption' => $request->caption,
    //             'image' => $filename,
    //             'user_id' => $user->id,

    //         ]);
    //         return response()->json([
    //             'status' => 'success',
    //             'post'=>$post
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 'error'

    //         ]);
    //     }
    // }




    public function getPosts(){
        $posts=Post::get();
        return response()->json($posts);
    }
}
