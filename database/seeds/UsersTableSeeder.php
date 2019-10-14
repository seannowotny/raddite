<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usersCount = (int)$this->command->ask('How many users would you like? (Default 10)', 10);

        if($usersCount < 1)
        {
            $this->command->info('Less than one user isn\'t possible. Seeding one user.');
            $usersCount = 1;
        }

        factory(App\User::class)->states('jd')->create();
        factory(App\User::class, $usersCount)->create();
    }
}
