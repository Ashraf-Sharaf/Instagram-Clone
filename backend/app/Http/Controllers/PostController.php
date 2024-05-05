<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\Comment;

class PostController extends Controller
{




    public function get_posts(){
        $posts=Post::get();
        return response()->json($posts);
    }

    
    public function create_post(Request $request){
        $authUser=Auth::id();
        if(!$authUser){
            return response()->json([
                'status'=>401,
            ]);
            }
    
        $post=Post::create([
            'caption' => $request->caption,
            'image' => $request->image,
            'user_id'=> $authUser
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Post created successfully',
            'post' => $post,

        ]);
    }

    public function likes(Request $request){
        $post=Post::find($request->post_id);
        $likes=$post->getLikes();

        return $likes;
    }


    public function comments(Request $request){
        $comments=Comment::get()->where('post_id',$request->post_id);
        if($comments){
        return response()->json([
            'status' => 200,
            'message' => 'Comments retrieved successfully',
            'comments' => $comments

        ]);
        }

        return response()->json([
            'status' => 401,
            'message' => 'No comments found',

        ]);
    }
}
