<?php

use App\Http\Controllers\CategorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SubcatController;
 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'Login']);

// Start All Tags 
Route::get('/alltags',[TagController::class, 'allTag']);
Route::put('/change_status/{id}/{user_id}/{role}',[TagController::class, 'changeStatus']);
Route::delete('/deletetag/{id}/{user_id}/{role}',[TagController::class, 'deleteTag']);
Route::post('/addtag',[TagController::class, 'addTag']);
Route::put('/updatetag/{id}',[TagController::class, 'updateTag']);
Route::get('/findtag/{id}',[TagController::class, 'findTag']);


// End All Tags 



// Start All Subcat 

Route::get('/allsubcats',[SubcatController::class,'allSubCat']);
Route::post('/addsubcat',[SubcatController::class,'addSubCat']);
Route::put('changesubcatstatus/{id}/{user_id}/{role}',[SubcatController::class,'changeSubCat']);
Route::delete('deletesubcat/{id}/{user_id}/{role}',[SubcatController::class,'deletesubcat']);
Route::get('findsubcat/{id}',[SubcatController::class,'findSubCat']);
Route::put('updatesubcat/{id}',[SubcatController::class,'updateSubCat']);




// End All Subcat 

// Start All Cat 
Route::get('/allcats',[CategorieController::class, 'allCat']);


// End All Cats 
