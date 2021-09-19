<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Db;
use Illuminate\Http\Request;
use App\Models\Tag;
use App\Models\User;



class TagController extends Controller
{

    // Add Tag Start 
    function addTag(Request $req){

         $req->name;
        $tag = new Tag ; 
        $name = $req->name;
        $tag->name = $req->name;
        $tag->cat_id = $req->cat_id;
        $tag->user_id = $req->user_id;
        $userRole = $req->user_role;
        $tag->status = 1;
         
        
    $tagCheck =  DB::select("select * from tags where name = '$tag->name'");
       if(isset($tagCheck[0])){
        
          
            return   response([
                'msg'=>"already",
                        "result" => $tag
                    ]);
        
        
        
        }else{
            $user = User::find($req->user_id);

            if(isset($user->id)){
        
            if($name!='' && $name!=null  && $tag->cat_id!='' && $tag->cat_id!=null && $tag->user_id!='' && $tag->user_id!=null && $tag->status!=null && $tag->status!='' && $tag->status==0 || $tag->status==1 ){
        $tag->save();
        
           
                        return   response([
                    'msg'=>"Inserted",
                            "result" => $tag
                        ]);
                     
                    
             
        }else{
            return  response([
                'msg'=>"value_not",
                        "result" => $tag
                    ]);
        }


        }
        else{
            return  response([
                'msg'=>"user_not",
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
        
            function deleteTag($id,$user_id,$user_role){

                $tag = Tag::find($id);
                $user = User::find($user_id);




 
if(isset($tag->id) && isset($user->id)){
if($tag->user_id==$user->id){
$delete = DB::delete("delete from tags where id ='$id' AND user_id='$user_id'");


if($delete==1){
    return response([
    
        'msg'=>"deleted"

    ]);
}else{
    return response([
    
        'msg'=>"fault"

    ]);

}




}else if($user->role==101){
        $delete = DB::delete("delete from tags where id ='$id'");
        if($delete==1){
            return response([
            
                'msg'=>"deleted"
    
            ]);
        }else{
            return response([
            
                'msg'=>"fault"
    
            ]);

        }




    }
    else{
        return response([
            
            'msg'=>"error_deleted"

        ]);
    }
     


                
         
         
}         
   
else{
    if(!isset($tag->id)){
        return response([
            
            'msg'=>"tag_not_exits"

        ]);
    }
    else{
        return response([
            
            'msg'=>"user_not_exits"

        ]);
    }
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
                             return    response(['result'=>$user, 'msg'=>'change']);
        }
        else{
          
            
            $user = DB::select("select * from  tags where user_id = $userId AND id=$id");
        

            if(isset($user[0]->id)){
              $tag->save();
              return response(['result'=>$user, 'msg'=>'change']);
            } 
else{


    return response(['result'=>$user, 'msg'=>'not_change']);
}



        }
        
        
    }
else{
    
    return response(['result'=>'no', 'msg'=>'show_not']);
}          
           
          }
        
        // Change Status End  
        
        
        
        // Find Tag Start
        function findTag($id){
         $tag = Tag::find($id);
         if(isset($tag)){
            return response(['result'=>$tag,'msg'=>'show']);

         }
          else{
              return response(['result'=>$tag,'msg'=>'tag_wrong']);
          }
         
        }
        
        
    // Find Tag   End 


        // Update Tag Start
        function updateTag($id,Request $req){
            
        
       
            $update = Tag::find($id);

     
                $update->name = $req->name;
            
         

                $update->status = $req->status;
          
            
                $update->cat_id=$req->cat_id;
             
            

if($req->user_role==101){
           $updated = $update->save();
           if($updated==1){




            
            return response(['result'=>$update,'msg'=>'updated']);
           }
    
         
}else{
$checkUser = DB::select("select * from tags where id = '$req->id' AND user_id = '$req->user_id'");

if(isset($checkUser[0])){
       $updated = $update->save();
       if($updated==1){
        return response(['result'=>$update,'msg'=>'updated']);
                }
 

}else{


return response(['result'=>'','msg'=>'not_vendor']);

}


 



}   
        
        }
        
        // Update Tag end
          
        
}