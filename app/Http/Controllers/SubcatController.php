<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Subcat;
use App\Models\User;


class SubcatController extends Controller
{
    // All SubCat Start 
  function  allSubCat(){
      $subCat = Subcat::all();

      if(isset($subCat[0])){
          return response(['result'=>$subCat , 'msg'=>'show']);
      }
      else{
        return response(['result'=>'' , 'msg'=>'empty']);
   
      }
 
    }

// All SubCat End 



function changeSubCat($id,$userId,$userRole){

$subCat = Subcat::find($id);

if($subCat->status==1){
    $subCat->status=0;
}else{
    $subCat->status=1;
}
 
if(isset($subCat)){

    if($userRole==101){
   $result= $subCat->save();
   if($result==true){
return response(['result'=>$result, 'msg'=>'changed']);
   }else{
    return response(['result'=>$result, 'msg'=>'error']);
  
   }
    }
else{

    $user= User::find($userId);

 if(isset($user)){

    if ($subCat->user_id==$user->id){
        $result= $subCat->save();

        if($result==true){
            return response(['result'=>$result, 'msg'=>'changed']);
               }else{
                return response(['result'=>$result, 'msg'=>'error']);
              
               }
 
    }
    else{
        return response(['result'=>$subCat->status , 'msg'=>'vendor_status_empty']);
    
    }



 }else{
    return response(['result'=>$subCat->status , 'msg'=>'id_status_empty']);
 
 }



   }
  
}else{
    return response(['result'=>'' , 'msg'=>'user_status_empty']);
}




}


function deleteSubCat($id,$userId,$userRole){
$subcat= Subcat::find($id);


 
if(isset($subcat)){

if($userRole==101){
    $delete = DB::delete("delete from subcats  where id = '$id'");
    if($delete==1){
        return response(['result'=>$subcat , 'msg'=>'deleted']);
    }else{
        return response(['result'=>$subcat , 'msg'=>'error']);
    }
 

}else{
    $user = User::find($userId);

    if(isset($user)){


        if($subcat->user_id==$user->id){
            $delete = DB::delete("delete from subcats  where id = '$id'");
            if($delete==1){
                return response(['result'=>$subcat , 'msg'=>'deleted']);
            }else{
                return response(['result'=>$subcat , 'msg'=>'error']);
            }
 
        }else{
            return response(['result'=>$subcat , 'msg'=>'vendor_delete_empty']);
        }
 

    }else{
        return response(['result'=>$subcat , 'msg'=>'user_delete_empty']);
    }

 
}
 
  
}else{

return response(['result'=>$subcat , 'msg'=>'id_delete_empty']);
 
}}



// Find   start



function findSubCat($id){


    $subcat = Subcat::find($id);
    if(isset($subcat)){
       return response(['result'=>$subcat,'msg'=>'show']);

    }
     else{
         return response(['result'=>'','msg'=>'empty']);
     }
    
   }
   




// Find  end 



// Update Start 

function updateSubCat($id , Request $req){


       
    $update = Subcat::find($id);

    
   if(isset($update)){
    $checkName = DB::select("select name from subcats where name = '$req->name' AND id!='$id'");
 
if(!isset($checkName[0])){

    if(isset($req->name)){

        $update->name = $req->name;
    } 
    if(isset($req->status)){

        $update->status = $req->status;
    }

    if(isset($req->cat_id)){
        $update->cat_id=$req->cat_id;

    }
 
 


if($req->user_role==101){
$updated = $update->save();
if($updated==1){





return response(['result'=>$update,'msg'=>'updated']);
}


}else{
$checkUser = DB::select("select * from subcats where id = '$req->id' AND user_id = '$req->user_id'");

 
if(isset($checkUser[0])){

$updated = $update->save();
if($updated==1){

return response(['result'=>$update,'msg'=>'updated']);
    }
    else{
        return response(['result'=>$update,'msg'=>'error']);
    }


}else{


return response(['result'=>$update,'msg'=>'not_vendor']);

}
 
}   

}else{
    return response(['result'=>$update,'msg'=>'name_already']);

}

}else{
    return response(['result'=>$update,'msg'=>'empty_id']);

}





}


// Update   End 




// Insert Start 







function addSubCat(Request $req){


     
    $subCat = new Subcat ; 
     
    $name = $req->name;
    $subCat->name = $req->name;
    $subCat->cat_id = $req->cat_id;
    $subCat->user_id = $req->user_id;
    $subCat->parent_id = $req->parent_id;
    
    $subCat->status = $req->status;
     
    
$subcatCheck =  DB::select("select * from subcats where name = '$subCat->name'");
   if(isset($subcatCheck[0])){
    
      
        return   response([
            'msg'=>"already",
                    "result" => $subCat
                ]);
    
    
    
    }else{
        $user = User::find($req->user_id);

        if(isset($user->id)){
    
        if($name!='' && $name!=null  && $subCat->cat_id!='' && $subCat->cat_id!=null && $subCat->user_id!='' && $subCat->user_id!=null && $subCat->status!=null && $subCat->status!='' && $subCat->status==0 || $subCat->status==1 ){
            $subCat->save();
    
       
                    return   response([
                'msg'=>"Inserted",
                        "result" => $subCat
                    ]);
                 
                
         
    }else{
        return  response([
            'msg'=>"value_not",
                    "result" => $subCat
                ]);
    }


    }
    else{
        return  response([
            'msg'=>"user_not",
                    "result" => $subCat
                ]);
    }
}
    
  

}




















// insert end 






}





