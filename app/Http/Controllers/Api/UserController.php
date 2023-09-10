<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;

use App\Models\UserPrayergroupDetail;
use App\Models\UserSeatDetail;

use App\Models\UserFaithfulDetail;
use App\Models\UserDioceseDetail;
use App\Models\UserParishDetail;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Support\Facades\File;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->get();
        return UserResource::collection($users);
    }

    /**
     * Get users by type.
     */
    public function getByType(string $type, Request $request)
    {
        $officialParish = intval($request->officialParish);
        $users = User::where('user_type', $type)
            ->where('parish_official', $officialParish)
            ->get();
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request): Response
    {
        $fields = $request->validated();

        $user = new User([
            'username' => $fields['username'],
            'lastname' => $fields['lastname'],
            'parish_official' => $fields['parish_official'],
            'email' => $fields['email'],
            'user_type' => $fields['user_type'],
            'password' => Hash::make($fields['password']),
            'confirmed' => true,
        ]);


        
        UserFaithfulDetail::create([
            'user_id' => $user->id
        ]);

        UserDioceseDetail::create([
            'user_id' => $user->id
        ]);

        UserParishDetail::create([
            'user_id' => $user->id
        ]);

        UserPrayergroupDetail::create([
            'user_id' => $user->id
        ]);

        UserSeatDetail::create([
            'user_id' => $user->id
        ]);

    

        $user->save();


        // Reste du code...
        $response = [
            'status' => true,
            'message' => 'create successful!',
            'data' => [
                'user' => new UserResource($user),
            ]
        ];

        return response($response, 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Confirm the user.
     */
    public function confirmed(User $user)
    {
        $user->confirmed = true;
        $user->save();
        return new UserResource($user);
    }

    /**
     * Toggle user blocked status.
     */
    public function toogleBlocked (User $user)
    {
        $user->blocked = !$user->blocked;
        $user->save();
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update2(StoreUserRequest $request, User $user): Response
    {
        // Implement the logic to update the user resource here.


        $fields = $request->validated();

        $user->update2([
            'username' => $fields['username'],
            'lastname' => $fields['lastname'],
            'parish_official' => $fields['parish_official'],
            'email' => $fields['email'],
            'user_type' => $fields['user_type'],
            'password' => Hash::make($fields['password']),
            'confirmed' => true,
        ]);
        return response()->noContent();
    }




 
    /**
     * Destroy the specified resources.
     */
    public function destroy(string $users, Request $request)
    {
        $userIds = json_decode($users);

        foreach ($userIds as $userId) {
            $user = User::find($userId);

            if ($user && File::exists(public_path(str_replace($request->getSchemeAndHttpHost() . '/', "", $user->avatar)))) {
                File::delete(public_path(str_replace($request->getSchemeAndHttpHost() . '/', "", $user->avatar)));
                $user->delete();
            }
        }

        return response()->noContent();
    }
}
