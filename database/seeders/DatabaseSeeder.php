<?php

namespace Database\Seeders;

use App\Models\Categorie;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            AboutSeeder::class,
            ArticleSeeder::class,
            TagSeeder::class,
            TemoinSeeder::class,
            SavoirSeeder::class,
            ContactSeeder::class,
            CategorieSeeder::class,
         ]);

    }
}
