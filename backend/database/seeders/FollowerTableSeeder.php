<?php

namespace Database\Seeders;

use App\Models\Follower;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FollowerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Follower::create([
            "user_id"=>1,
            "followed_user_id"=>2,
        ]);
        Follower::create([
            "user_id"=>2,
            "followed_user_id"=>1,
        ]);
        Follower::create([
            "user_id"=>1,
            "followed_user_id"=>3,
        ]);
        Follower::create([
            "user_id"=>2,
            "followed_user_id"=>4,
        ]);
        Follower::create([
            "user_id"=>3,
            "followed_user_id"=>1,
        ]);
    }
}
