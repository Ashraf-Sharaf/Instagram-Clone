<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Comment::create([
            "comment"=>"amazing post!!!",
            "user_id"=>2,
            "post_id"=>1,
        ]);

        Comment::create([
            "comment"=>"good post!!!",
            "user_id"=>2,
            "post_id"=>2,
        ]);

        Comment::create([
            "comment"=>"not bad",
            "user_id"=>3,
            "post_id"=>1,
        ]);

        Comment::create([
            "comment"=>"bad",
            "user_id"=>1,
            "post_id"=>4,
        ]);

        Comment::create([
            "comment"=>"nice",
            "user_id"=>4,
            "post_id"=>4,
        ]);
    }
}
