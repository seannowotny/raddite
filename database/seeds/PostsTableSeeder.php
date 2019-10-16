<?php

use App\Post;
use App\User;
use App\Board;
use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $postsCount = (int)$this->command->ask('How many posts would you like per user? (Default 4)', 4);

        $users = User::all();

        $users->each(function ($user) use (&$postsCount) {
            for ($i=0; $i < $postsCount; $i++)
            { 
                Board::all()->random()->posts()->save(factory(Post::class)->make([
                    'user_id' => $user,
                ]));
            }
        });
    }
}
