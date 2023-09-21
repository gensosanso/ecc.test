<?php

use App\Http\Controllers\Api\AuthenticateController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\ContinentController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ZonedController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post("/register", [AuthenticateController::class, 'register']);
Route::post("/login", [AuthenticateController::class, 'login']);
Route::post("/login-admin", [AuthenticateController::class, 'loginAdmin']);

Route::get("/continents", [ContinentController::class, 'index']);
Route::get("/zoneds", [ZonedController::class, 'index']);
Route::get("/countries", [CountryController::class, 'index']);
Route::get("/cities", [CityController::class, 'index']);
Route::get("/departments", [DepartmentController::class, 'index']);

Route::post("/store", [UserController::class, 'store']);
Route::post("/users/type/{type}", [UserController::class, 'getByType']);
Route::apiResource('users', UserController::class);

Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
    Route::post("/logout", [AuthenticateController::class, 'logout']);

    Route::controller(UserController::class)->group(function () {
        Route::put("/users/confirmed/{user}", 'confirmed');
        Route::put("/users/toggle-blocked/{user}", 'toggleBlocked');
        Route::put("/users-update/{user}", 'update2');
        // Route::post('/api/users/{user}', 'update2')->name('api.users.update');
    });

    Route::controller(ContinentController::class)->group(function () {
        Route::post("/continents", 'store');
        Route::get("/continents/{continent}", 'show');
        Route::put("/continents/{continent}", 'update');
        Route::delete("/continents/{continent}", 'destroy');
    });

    Route::controller(ZonedController::class)->group(function () {
        Route::post("/zoneds", 'store');
        Route::get("/zoneds/{zoned}", 'show');
        Route::put("/zoneds/{zoned}", 'update');
        Route::delete("/zoneds/{zoned}", 'destroy');
    });

    Route::controller(CountryController::class)->group(function () {
        Route::post("/countries", 'store');
        Route::get("/countries/{country}", 'show');
        Route::put("/countries/{country}", 'update');
        Route::delete("/countries/{country}", 'destroy');
    });

    Route::controller(CityController::class)->group(function () {
        Route::post("/cities", 'store');
        Route::get("/cities/{city}", 'show');
        Route::put("/cities/{city}", 'update');
        Route::delete("/cities/{city}", 'destroy');
    });

    Route::controller(DepartmentController::class)->group(function () {
        Route::post("/departments", 'store');
        Route::get("/departments/{department}", 'show');
        Route::put("/departments/{department}", 'update');
        Route::delete("/departments/{department}", 'destroy');
    });
});
