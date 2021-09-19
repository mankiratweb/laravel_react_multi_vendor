<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{
    function register(Request $req){
        $user = new User;
$find_user = DB::select("select * from users where email = '$req->email'");



if(isset($find_user[0]->id)){
    return  response([
        'msg'=>"already",
                "result" => $find_user
            ]);

}else{
  
    $user->name = $req->name;
    $user->email= $req->email;
    $user->password = $req->pass;
    $user->role = 101;
   $result =$user->save();

 
    if($result==1){
        $check_user = DB::select("select * from users where email = '$req->email' AND password = '$req->pass'");
        return  response([
            'msg'=>"register",
                    "result" => $check_user
                ]);
    }
    else{
        return  response([
            'msg'=>"tech_error",
                    "result" => $result
                ]);
    
    }
 
}
 
     }



     function Login(Request $req){
 
$check_user = DB::select("select * from users where email = '$req->email'");

 
if(isset($check_user[0]->id)){
    if($check_user[0]->password==$req->pass){
        return response([
            'result'=>$check_user,
            'msg'=>'login'
        ]);

    }else{
        return response([
            'result'=>$check_user,
            'msg'=>'incorrect'
        ]);
    }
          





        }else{
            return response([
                'result'=>$check_user,
                'msg'=>'not_login'
            ]);
        }
     }



















}
