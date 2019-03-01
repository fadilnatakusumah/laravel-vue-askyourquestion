<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Reply;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    // protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];

    // OR USE THIS WAY
    protected $guarded = []; // means that ignores all fillable rules

    // set the get slug function
    public function getRouteKeyName()
    {
        return 'slug';
    }

    // get path function
    public function getPathAttribute(){
        return asset("api/question/$this->slug");
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
