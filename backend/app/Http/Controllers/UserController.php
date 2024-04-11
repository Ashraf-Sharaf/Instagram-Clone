<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{

    

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('username', 'password');

        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 200,
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'bio' => $request->bio
        ]);

  
        return response()->json([
            'status' => 200,
            'message' => 'User created successfully',
            'user' => $user,

        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }


    public function getUser()
    {
        $user=Auth::user();
        if($user){
        return response()->json([
            'status'=>200,
            'user' => $user
        ]);
        }

        return response()->json([
            'status'=>401,
        ]);
    }


    public function updateUser(Request $req)
    {
        $authUser=Auth::user();
        
        $user=User::where("username",$authUser->username)->first();
        $user->update([
            'bio'=>$req->bio,
        ]);
        $user->save();
        return response()->json([
            'status'=>200,
            'bio'=>$req->bio
        ]);
 
    }
}

