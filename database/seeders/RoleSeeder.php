<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            [
                'nom' => 'Admin',
                'email'=>'admin@email.com',
                'password'=> Hash::make('adminadmin'),
                'role_id'=> 1,
            ],
            [
                'nom' => 'Webmaster',
                'email'=>'webmaster@email.com',
                'password'=> Hash::make('mastermaster'),
                'role_id'=> 2,
            ],
            [
                'nom' => 'Auteur',
                'email'=>'auteur@email.com',
                'password'=> Hash::make('auteurauteur'),
                'role_id'=> 3,
            ],
            [
                'nom' => 'Lecteur',
                'email'=>'lecteur@email.com',
                'password'=> Hash::make('lecteurlecteur'),
                'role_id'=> 4,
            ],
        ]);
    }
}
