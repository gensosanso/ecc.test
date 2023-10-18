<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'status',
        'user_id',
        'continent_id',
        'zone_id',
        'country_id',
        'theme_id',
        'subtheme_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }

    public function zone()
    {
        return $this->belongsTo(Zone::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }

    public function subtheme()
    {
        return $this->belongsTo(Subtheme::class);
    }
}
