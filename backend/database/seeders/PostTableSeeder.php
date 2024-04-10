<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            "caption"=>"this is my FIRST post",
            "image"=>"image",
            "user_id"=>1,
        ]);

        Post::create([
            "caption"=>"this is my SECOND post",
            "image"=>"image",
            "user_id"=>1,
        ]);

        Post::create([
            "caption"=>"this is my first post",
            "image"=>"image",
            "user_id"=>2,
        ]);

        Post::create([
            "caption"=>"this is my first post",
            "image"=>"image",
            "user_id"=>3,
        ]);
    }
}
