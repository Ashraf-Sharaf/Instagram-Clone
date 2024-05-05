<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Like;

class LikeController extends Controller
{
    public function like_post(Request $request){
        $authUser=Auth::id();

        if(!$authUser){
            return response()->json([
                'status'=>401,
            ]);
            }
    
        $like=Like::create([
            'user_id' => $authUser,
            'post_id' => $request->post_id
            
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Liked successfully',


        ]);
    }


    public function all_likes(Request $request){
        
    }
}
