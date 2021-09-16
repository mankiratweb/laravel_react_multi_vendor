<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/alltags', function () {
    return view('welcome');
});

Route::get('/addtag', function () {
    return view('welcome');
});
Route::get('/allcats', function () {
    return view('welcome');
});
Route::get('/addcat', function () {
    return view('welcome');
});
Route::get('/allsubcats', function () {
    return view('welcome');
});
Route::get('/addsubcat', function () {
    return view('welcome');
});
Route::get('/allpros', function () {
    return view('welcome');
});
Route::get('/addpro', function () {
    return view('welcome');
});
