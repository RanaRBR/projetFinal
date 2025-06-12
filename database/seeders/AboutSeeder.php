<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('abouts')->insert([
            [
                'titre'=>'Le carnet des codeurs nomades',
                'texte'=>'Ce blog a pour vocation de mettre en lumière les parcours de professionnels du digital ayant choisi de s’expatrier pour exercer leur activité depuis l’étranger. Il s’articule autour de contenus éditoriaux variés : articles de fond, interviews, récits d’expériences et ressources pratiques. L’objectif est de documenter les réalités du travail numérique sans frontières, en explorant les enjeux, les opportunités et les défis liés à cette nouvelle manière de vivre et de travailler. Ce site se veut à la fois une source d’inspiration et un guide pour celles et ceux qui envisagent une transition vers un mode de vie nomade et connecté.',
                'image'=> '/images/aboutImg.jpg',
            ]
        ]);
    }
}
