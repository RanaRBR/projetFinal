<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SavoirSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('savoirs')->insert([
            [
                'titre' => 'Javascript',
                'info' => "Javascript est partout sur le web : il fait tourner environ 95 % des sites internet dans le monde. 
                C’est le langage que tous les navigateurs comprennent pour rendre les pages web interactives : boutons qui réagissent, animations, formulaires qui se valident sans recharger la page... 
                Sans javascript, internet serait beaucoup plus statique et moins fun à utiliser. 
                C’est un peu le “langage secret” derrière toutes les expériences web modernes que vous voyez chaque jour !",
            ],
            [
                'titre' => 'React',
                'info' => "React, le framework JavaScript de Facebook, est inspiré d’un langage fonctionnel utilisé dans la finance. 
                Avant React, Facebook s’est inspiré du langage XHP, une extension de PHP avec une syntaxe proche du XML, créée pour faciliter la création d’interfaces web. XHP vient lui-même de langages fonctionnels. 
                Cette inspiration a mené à la création de React, qui utilise le concept de composants déclaratifs et la gestion d’état efficace. 
                Ainsi, React est né d’un mélange de langages et idées venant d’univers très variés, dont la finance et les langages fonctionnels.",
            ],
            [
                'titre' => 'En Afrique...',
                'info' => "Au Rwanda, des développeurs créent des sites web... en Kinyarwanda ! 
                Grâce à l'essor du numérique local, des développeurs rwandais créent des frameworks et des CMS en Kinyarwanda, la langue nationale. 
                Certains outils de développement web locaux traduisent même les balises HTML, les messages d'erreur, ou les interfaces d’admin pour permettre à des débutants de coder sans maîtriser l’anglais. 
                Un exemple ? L’initiative Murugo, qui propose des services digitaux accessibles, contribue à cette dynamique. 
                Une localisation du web à la source du code !",
            ],
            [
                'titre' => "L'IA attaque la back-end",
                'info' => "L’IA aide à sécuriser les applications backend. 
                Avec des algorithmes d’IA, il est possible de détecter des comportements suspects, des tentatives de piratage ou des vulnérabilités, renforçant la sécurité des sites web et applications.",
            ],
        ]);
    }
}
