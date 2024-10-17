<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function register(Request $request){
       
        $validatedData = $request->validate([
                            'email'=>'required|email',
                            'password' =>'required|min:6'
                        ]);
        $validatedData['password'] = Hash::make($request->input('password'));
   
        $user = User::where('email',$validatedData['email'] )->first();
        if($user){
            return response()->json(['message'=>'This Email ID is already registered. Please Add another email id', 'status'=>'error']);
        }else{
            User::create($validatedData);
            return response()->json(['message'=>'Your Email ID is registered successfully.', 'status'=>'200']);
        }

    }

    public function login(Request $request){
     
       $validatedData = $request->validate([
            'email'=>'required|email',
            'password' =>'required|min:6'
        ]);
      
        $credentials = $request->only('email','password');
        $user = User::where('email', $validatedData['email'])->first();
        if($user){
           
            if (Auth::attempt($credentials)) {
                // Authentication passed, redirect to dashboard
                // Generate the authentication token
                $token = $user->createToken('auth_token')->plainTextToken;
                return response()->json(['token'=> $token,'message'=>'You are logged in successfully.', 'status'=>'200']);
            } else {
                // Authentication failed, return error message
                return response()->json(['message'=>'password is incorrect.', 'status'=>'404']);
            }    
        }else {
            return response()->json(['message'=>'This Mail ID is not found.', 'status'=>'404']);

        }   

    }
}
