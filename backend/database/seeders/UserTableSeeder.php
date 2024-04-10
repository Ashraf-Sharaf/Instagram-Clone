<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name"=>"user1",
            "username"=>"joker",
            "password"=>"pass1234"
        ]);

        User::create([
            "name"=>"user2",
            "username"=>"pirate",
            "password"=>"pass1234"
        ]);

        User::create([
            "name"=>"user3",
            "username"=>"player",
            "password"=>"pass1234"
        ]);

        User::create([
            "name"=>"user4",
            "username"=>"noone",
            "password"=>"pass1234"
        ]);
    }
}
