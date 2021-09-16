<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Db;
use Illuminate\Http\Request;
use App\Models\Tag;



class TagController extends Controller
{
    function addTag(Request $req){

        $tag = new Tag ; 
        $name = $req->name;
        $tag->name = $req->name;
        $tag->cat_id = $req->cat_id;
        $tag->user_id = $req->user_id;
        $tag->status = 1;
        
        
                $tagCheck = DB::table('tags')->select('name')->where('name','=',$name)->get();
        
        
                $result = count($tagCheck);
        if($result>0){
        
          
            return   response([
                'msg'=>"already",
                        "result" => $tag
                    ]);
        
        
        
        }else{
        
        $tag->save();
        
            if(isset($tag)) {
                        return   response([
                    'msg'=>"update",
                            "result" => $tag
                        ]);
                     
                    }
                     else {
                        return  response([
                            'msg'=>"error",
                                    "result" => $tag
                                ]);
                    }
        
        
        
        
        
        
        }
        
         
        
        
        
         
        
        
         
         
          
            
             
        
            }
        
        
        
        
        
        
        
            function allTag(){
              $result = DB::table('tags')->get();


  if(isset($result[0]->id)){
    return response(['result'=>$result, 'msg'=>'done']);
  } else{
      return response(['result'=>$result, 'msg'=>'not-done']);
  }       
                
            
            }
        
            function deleteTag($id,$user_id){
        
            $result =     DB::table('tags')->join('users','users.id','=' ,'tags.user_id')
                ->where('tags.id','=',$id)->where('tags.user_id','=', $user_id)->orwhere('users.role','=','1')->where('tags.id','=',$id)
                ->delete();
        
         
        
                if(isset($result)){
                    return  $result;
               }
                else{
          
                    return ["result"=>"Opration Failed"];
                }
        
        
        
                
            }
            
            
        
            
            // Change Status Start
            
            function changeStatus($id,$userId,$role_id){
        
               $tag = Tag::find($id);
                

                if(isset($tag->id)){
                if($tag->status==1){
                    $tag->status = 0;
                }else{
                    $tag->status = 1;
                }
                
               
                
                           if($role_id==101){
                            $tag->save();
                            $user = DB::select("select * from  tags where user_id = $userId AND id=$id");
                             return    response(['result'=>$user, 'msg'=>'not_change']);
        }
        else{
          
            
            $user = DB::select("select * from  tags where user_id = $userId AND id=$id");
        

            if(isset($user[0]->id)){
              $tag->save();
              return response(['result'=>$user, 'msg'=>'change']);
            } 
else{


    return response(['result'=>$user, 'msg'=>'change']);
}



        }
        
        
    }
else{
    
    return response(['result'=>'no', 'msg'=>'show_not']);
}          
           
          }
        
        // Change Status End  
        
        
        
        
        function findTag($id,$userId){
        
            $role = DB::table('tags')->join('users','users.id','=','tags.user_id')
            ->select('users.role')->where('users.id','=',$userId)->where('users.role','=',101)->first();
            
            if($role){
                
             $tag =    DB::table('tags')->join('categories','categories.id','=','tags.cat_id')
                ->select('tags.*','categories.cat_name')->where('tags.id','=',$id)->get();
        
            return     $tag ;
        
                     
        }
        else{
        
            $user = DB::select("select * from  tags where user_id = $userId AND id=$id");
        
            if($user){
                $tag =    DB::table('tags')->join('categories','categories.id','=','tags.cat_id')
                ->select('tags.*','categories.cat_name')->where('tags.id','=',$id)->get();
        
            return     $tag ;
            
            }else{
                return 0;
            }
        
        
            
        }
        
         
        }
        
        
        
        // Update Tag Start
        function updateTag($id,$user_id,Request $req){
        
        
        
            $role = DB::table('tags')->join('users','users.id','=','tags.user_id')
            ->select('users.role')->where('users.id','=',$user_id)->where('users.role','=',101)->first();
            $name = $req->input('name');
         
        
        $tag = Tag::find($id);
        
        if($req->input('cat_id')){
            
            $tag->cat_id = $req->input('cat_id');
        }
        if($req->input('name')){
            $tag->name = $name;
        
        }
        if($req->input('status')==0){
        
            $tag->status  = 0;
        }
        else{
            $tag->status  = 1;
        }
        
        
        
        if($role){
        return $tag->save();
        
        
        }
        else{
            
            $user = DB::select("select * from  tags where user_id = $user_id AND id = $id");
        
        
        if($user){
          return  $tag->save();
        }else{
        return 0;
        }
        
             
         
            
        }
        
        
        
         
        
        }
        
        // CUpdatev Tag end
          
        
}