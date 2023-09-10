<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'username' => $this->faker->userName,

            'lastname' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'user_type' => 'admin',
            'password' => Hash::make('Chirac@2023'), // Remplacez 'password' par le mot de passe souhaité
            'confirmed' => true,
            'blocked' => false,
            'parish_official' => true,
            'remember_token' => '',
            'email_verified_at' => now(),
        ];
    }
}
