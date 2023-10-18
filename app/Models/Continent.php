<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Continent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
    ];

    public function zones()
    {
        return $this->hasMany(zone::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
