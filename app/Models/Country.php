<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'code_iso',
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
        'zone_id'
    ];

    public function zone()
    {
        return $this->belongsTo(zone::class);
    }

    public function cities()
    {
        return $this->hasMany(City::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
