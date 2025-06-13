<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemoinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('temoins')->insert([
            [
            'nom'=> 'Nicolas',
            'pays'=>'Canada',
            'photo'=>'/images/nicolas.jpg',
            'temoignage'=>'Partir au Canada a été l’une des meilleures décisions de ma vie. J’ai travaillé pour une startup tech à Montréal pendant deux ans. Ce qui m’a frappée, c’est l’équilibre entre travail et vie perso. Les horaires étaient flexibles, la culture bienveillante, et les salaires corrects. En tant que développeuse web, j’ai eu l’occasion de toucher à plein de technos différentes. L’hiver est rude, mais les gens sont chaleureux. Aujourd’hui encore, je reste en contact avec mes anciens collègues.'
            ],

             [
            'nom'=> 'Laura',
            'photo'=>'/images/laura.avif',
            'pays'=>'Portugal',
            'temoignage'=>'J’ai quitté Paris pour Lisbonne après avoir décroché un poste remote-friendly dans une agence digitale. La vie y est plus douce, le coût de la vie plus bas, et la communauté tech est très dynamique. Beaucoup de développeurs étrangers s’y installent, donc on ne se sent jamais seul. J’ai gagné en autonomie, en réseau, et je me sens beaucoup plus épanouie dans mon travail. C’est un cadre idéal pour les freelances ou le remote.'

            ],
            [
            'nom'=> 'Sarah',
            'pays'=>'Allemagne',
            'photo'=>'/images/sarah.jpg',
            'temoignage'=>'À Berlin, la tech est en effervescence. J’ai rejoint une scale-up internationale et j’ai tout de suite senti la différence : moins de hiérarchie, plus de responsabilités. Les Allemands sont très directs, il faut s’adapter, mais ça pousse à progresser vite. J’ai aussi apprécié la diversité des équipes, on travaille avec des gens du monde entier. C’est challengeant, mais très enrichissant humainement et professionnellement.',
            ],
            [
            'nom'=> 'Iris',
            'pays'=>'Japon',
            'photo'=>'/images/iris.jpg',
            'temoignage'=>'Travailler au Japon, c’est une expérience unique. J’ai été embauché dans une grosse entreprise tech à Tokyo. La discipline et la rigueur sont impressionnantes. Ce n’était pas facile au début : la barrière de la langue, le rythme de travail intense… Mais j’ai beaucoup appris, surtout sur l’optimisation du code et la qualité. Je me suis aussi adapté à une nouvelle façon de collaborer. C’est une immersion totale dans une autre manière de vivre le métier.'
           
            ]
        ]);
    }
}
