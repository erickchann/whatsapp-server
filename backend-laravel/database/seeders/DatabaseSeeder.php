<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        Contact::create([
            'name' => 'Evo',
            'number' => 62895389916688
        ]);

        Contact::create([
            'name' => 'Nico',
            'number' => 62895701608479
        ]);

        Contact::create([
            'name' => 'Joshua',
            'number' => 6289689755772
        ]);
    }
}
