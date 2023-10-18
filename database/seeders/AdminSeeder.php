<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run()
    {
        User::factory()->create([
            'username' => 'admin',

            'lastname' => 'Doe',
            'email' => 'admin@example.com',
            'user_type' => 'admin',
            'password' => Hash::make('qwerrtyuioprd'), // Remplacez 'password' par le mot de passe souhaité
            'confirmed' => true,
            'blocked' => false,
            'parish_official' => true,
            'remember_token' => '',
            'email_verified_at' => now(),
        ]);
        User::factory()->create([
            'username' => 'admin',

            'lastname' => 'Doe3',
            'email' => 'admin@example1.com',
            'user_type' => 'admin',
            'password' => Hash::make('qwerrtyuioprd'), // Remplacez 'password' par le mot de passe souhaité
            'confirmed' => true,
            'blocked' => false,
            'parish_official' => true,
            'remember_token' => '',
            'email_verified_at' => now(),
        ]);
        // User::factory()->create([
        //     'username' => 'admin',

        //     'lastname' => 'Doe4',
        //     'email' => 'admin@example2.com',
        //     'user_type' => 'siege',
        //     'password' => Hash::make('qwerrtyuioprd'), // Remplacez 'password' par le mot de passe souhaité
        //     'confirmed' => true,
        //     'blocked' => false,
        //     'parish_official' => true,
        //     'remember_token' => '',
        //     'email_verified_at' => now(),
        // ]);
        // User::factory()->create([
        //     'username' => 'admin',

        //     'lastname' => 'Doe5',
        //     'email' => 'admin@example3.com',
        //     'user_type' => 'fidele',
        //     'password' => Hash::make('qwerrtyuioprd'), // Remplacez 'password' par le mot de passe souhaité
        //     'confirmed' => true,
        //     'blocked' => false,
        //     'parish_official' => true,
        //     'remember_token' => '',
        //     'email_verified_at' => now(),
        // ]);
    }
}
