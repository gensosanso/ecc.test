<?php

use App\Http\Controllers\Api\AuthenticateController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\ContinentController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\ThemeController;
use App\Http\Controllers\Api\SubthemeController;
use App\Http\Controllers\Api\zoneController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post("/register", [AuthenticateController::class, 'register']);
Route::post("/login", [AuthenticateController::class, 'login']);
Route::post("/login-admin", [AuthenticateController::class, 'loginAdmin']);

Route::get("/continents", [ContinentController::class, 'index']);
Route::get("/zones", [zoneController::class, 'index']);
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
    Route::get('/users/{id}/user_type', [UserController::class, 'getUserType'])->name('users.user_type');

    Route::controller(ContinentController::class)->group(function () {
        Route::post("/continents", 'store');
        Route::get("/continents/{continent}", 'show');
        Route::put("/continents/{continent}", 'update');
        Route::delete("/continents/{continent}", 'destroy');
    });

    Route::controller(zoneController::class)->group(function () {
        Route::post("/zones", 'store');
        Route::get("/zones/{zone}", 'show');
        Route::put("/zones/{zone}", 'update');
        Route::delete("/zones/{zone}", 'destroy');
        Route::get('/zones/{continent_id}', [ZoneController::class, 'getByContinent']);
    });

    Route::controller(CountryController::class)->group(function () {
        Route::post("/countries", 'store');
        Route::get("/countries/{country}", 'show');
        Route::put("/countries/{country}", 'update');
        Route::delete("/countries/{country}", 'destroy');
        Route::get('/countries/{zone_id}', [CountryController::class, 'getByZone']);
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

Route::get('/themes', [ThemeController::class, 'index'])->name('themes.index');
Route::get('/themes/create', [ThemeController::class, 'create'])->name('themes.create');
Route::post('/themes', [ThemeController::class, 'store'])->name('themes.store');
Route::get('/themes/{id}/edit', [ThemeController::class, 'edit'])->name('themes.edit');
Route::put('/themes/{id}', [ThemeController::class, 'update'])->name('themes.update');
Route::delete('/themes/{id}', [ThemeController::class, 'destroy'])->name('themes.destroy');

Route::get('/subthemes', [SubthemeController::class, 'index'])->name('subthemes.index');
Route::get('/subthemes/create', [SubthemeController::class, 'create'])->name('subthemes.create');
Route::post('/subthemes', [SubthemeController::class, 'store'])->name('subthemes.store');
Route::get('/subthemes/{id}/edit', [SubthemeController::class, 'edit'])->name('subthemes.edit');
Route::put('/subthemes/{id}', [SubthemeController::class, 'update'])->name('subthemes.update');
Route::delete('/subthemes/{id}', [SubthemeController::class, 'destroy'])->name('subthemes.destroy');


// les routes du controleur message
Route::get('/allMessages', [MessageController::class, 'getAllMessages']);
Route::get('/messages/order-by-date', [MessageController::class, 'orderByDate']);
Route::get('/messages/{id}/owner', [MessageController::class, 'getMessageOwner']);
Route::get('/messages/theme/{themeId}', [MessageController::class, 'getMessagesByTheme']);
Route::get('/messages/subtheme/{subthemeId}', [MessageController::class, 'getMessagesBySubtheme']);
Route::get('/messages/{id}', [MessageController::class, 'getMessageAttributes']);
Route::post('/messages', [MessageController::class, 'createMessage']);
Route::post('/messages/filter', [MessageController::class, 'filterMessages']);
Route::put('/messages/{id}', [MessageController::class, 'updateMessage']);
Route::delete('/messages/{id}', [MessageController::class, 'deleteMessage']);
Route::put('/messages/{id}/status/{status}', [MessageController::class, 'changeStatus']);
