<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Comment;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function comment_post(Request $request){
        $authUser=Auth::id();

        if(!$authUser){
            return response()->json([
                'status'=>401,
            ]);
            }
    
        $comment=Comment::create([
            'user_id' => $authUser,
            'comment'   => $request->comment,
            'post_id' => $request->post_id,
            
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Commented successfully',


        ]);
    }
}
