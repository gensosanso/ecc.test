<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zoned extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_fr',
        'name_en',
        'name_es',
        'continent_id',
    ];

    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }

    public function countries()
    {
        return $this->hasMany(Country::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
