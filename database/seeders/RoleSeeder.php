<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   
     


public function run()
{
    Role::insert([
        ['id' => 1, 'name' => 'admin'],
        ['id' => 2, 'name' => 'webmaster'],
        ['id' => 3, 'name' => 'auteur'],
        ['id' => 4, 'name' => 'lecteur'],
    ]);
}

}
