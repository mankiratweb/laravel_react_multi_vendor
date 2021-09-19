<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Categorie;

class CategorieController extends Controller
{
 function allCat(){
     $All_Cats = Categorie::all();

     if(isset($All_Cats[0]->id)){
        return response([
            'result'=>$All_Cats,
            'msg'=>'cat_all'
   
        ]);
 }
 else{
     return response([
         'result'=>'',
         'msg'=>'cat_all_not'

     ]);
 }
}
}