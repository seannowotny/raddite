<?php

use App\User;
use App\Board;
use Illuminate\Database\Seeder;

class BoardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $boardsCount = (int)$this->command->ask('How many boards would you like? (Default 3)', 3);

        $users = User::all();

        $users->each(function ($user) use (&$boardsCount) {
            if($boardsCount > 0 
            && rand(0, 1) === 1)
            {
                $user->boards()->saveMany(factory(Board::class, 1, [
                    'user_id' => $user->id,
                ])->make());

                $boardsCount--;
            }
        });
    }
}
