<?php

use App\Comment;
use App\Post;
use App\User;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $commentsCount = (int)$this->command->ask('How many comments would you like each user to make? (Default 5)', 5);

        $users = User::all();

        $users->each(function ($user) use (&$commentsCount) {
            for ($i=0; $i < $commentsCount; $i++)
            {
                if(Comment::all()->count() === 0 || rand(0, 2) === 0)
                {
                    $post = Post::all()->random();
                    $post->comments()->save(factory(Comment::class)->make([
                        'user_id' => $user,
                        'post_id' => $post,
                    ]));
                }
                else
                {
                    $comment = Comment::all()->random();
                    $comment = $comment->comments()->save(factory(Comment::class)->make([
                        'user_id' => $user,
                        // 'post_id' => $comment->post,
                    ]));
                }
            }
        });
    }
}
