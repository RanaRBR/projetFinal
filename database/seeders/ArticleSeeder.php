<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            [
                'titre' => ' Exil numérique : rencontre avec Maxime, développeur web installé à Bali.',
                'paragraphe' => 'Maxime Leclerc, 32 ans, est développeur web full-stack. Originaire de Lyon, il a fait le choix en 2022 de tout quitter pour poser ses valises à Bali, en Indonésie. Une décision audacieuse, motivée autant par un besoin d’évasion que par la volonté de concilier passion du code et qualité de vie. Depuis son bungalow niché entre rizières et océan, il construit des applications, gère des projets pour des clients européens, et partage sa vision du travail « libre », loin des open-spaces gris et des horaires rigides.

                Dans cette interview, il nous livre un regard lucide sur son parcours, ses motivations, et la réalité quotidienne d’un développeur expatrié dans un décor de carte postale. Entre télétravail, choc culturel et équilibre personnel, Maxime nous raconte comment il a transformé son métier en vecteur de liberté.

                Interview

                Julien Marceau : pourquoi as-tu décidé de quitter la France pour t’installer à Bali ?

                Maxime Leclerc : j’en avais marre de la routine métro-boulot-dodo. Même en tant que freelance, je sentais que mon environnement freinait ma créativité. J’ai découvert Bali lors d’un voyage et j’ai tout de suite été séduit par l’énergie du lieu, la chaleur humaine, et le mode de vie plus lent. Le coût de la vie étant abordable, je me suis dit : « pourquoi ne pas tenter ? ».

                Julien Marceau : comment as-tu adapté ton activité professionnelle à cette nouvelle vie ?

                Maxime Leclerc : j’ai réorganisé mes journées pour coller aux horaires européens. Je commence à bosser tôt le matin, vers 6h, et je termine en général vers 14h-15h. Ça me laisse l’après-midi pour profiter de l’île. Niveau réseau et outils, tout est en place ici : fibre, coworkings, communautés tech. C’est presque plus facile qu’à Paris parfois !

                Julien Marceau : est-ce que l’éloignement a un impact sur ta relation avec tes clients ?

                Maxime Leclerc : pas vraiment. La plupart de mes clients sont habitués à bosser avec des gens à distance. La clé, c’est la communication : être réactif, transparent, et bien caler les points réguliers. En réalité, ils sont plus attentifs à la qualité du travail qu’à l’endroit d’où je le fais.

                Julien Marceau : quels sont les avantages concrets que tu tires de cette vie à l’étranger ?

                Maxime Leclerc : d’abord le climat, évidemment ! Mais surtout, j’ai gagné en sérénité. Ici, je me sens moins stressé, plus concentré. La nature est omniprésente, ça aide à garder les idées claires. Et puis il y a cette sensation d’être libre, d’avoir repris le contrôle sur mon temps. Pour un développeur, c’est un luxe incroyable.

                Julien Marceau : quels conseils donnerais-tu à un développeur qui envisage de partir vivre et travailler à l’étranger ?

                Maxime Leclerc : d’abord, bien préparer son départ : vérifier les visas, la couverture santé, les décalages horaires. Ensuite, tester le pays avant de s’y installer. Et surtout, ne pas idéaliser : tout n’est pas parfait, il y a des défis (barrière de la langue, démarches administratives…). Mais si tu es autonome, adaptable et que tu as une bonne connexion internet, tu peux travailler de presque n’importe où.',

                'date' => "Novembre 2024",
                'photo' => "/images/article1.jpg",
                'auteur' => "Julien Marceau",
                'local' => false,

            ],
            [
                'titre' => 'Expatriation numérique : quand les développeurs web doublent leur pouvoir d’achat à l’étranger!',
                'paragraphe' => "Depuis quelques années, un phénomène discret mais croissant transforme la vie de nombreux professionnels du numérique : l’expatriation économique. Parmi eux, les développeurs web sont nombreux à franchir le pas. En conservant leurs clients européens tout en vivant dans des pays à faible coût, certains parviennent à augmenter significativement leur pouvoir d’achat, à améliorer leur qualité de vie, et à bâtir une nouvelle forme de stabilité financière.

                C’est le cas de Maxime Leclerc, développeur full-stack originaire de Lyon, qui a choisi de s’installer à Bali en 2022. Mais derrière l’anecdote individuelle se cache une réalité économique de plus en plus structurée.

                Vivre mieux, dépenser moins
                À Bali, au Vietnam, en Thaïlande ou au Portugal, des milliers de développeurs web travaillent à distance pour des entreprises françaises, suisses ou canadiennes. Grâce à leurs compétences très demandées, ils conservent des niveaux de revenus élevés (entre 3 000 et 6 000 € nets par mois) tout en bénéficiant d’un coût de la vie deux à trois fois inférieur à celui des grandes villes européennes.

                À titre d’exemple, un développeur freelance installé à Bali peut louer une villa avec piscine pour environ 400 à 600 € par mois, manger à l’extérieur pour 3 à 5 €, et couvrir ses frais mensuels (logement, nourriture, transport, coworking, loisirs) avec moins de 1 200 €. À Paris ou Lyon, le même niveau de confort exigerait au minimum 3 000 €.

                Un modèle économique avantageux
                Ce déséquilibre géographique permet à ces professionnels de générer une épargne mensuelle importante, souvent comprise entre 1 000 et 2 000 € selon leur activité. Beaucoup investissent ensuite dans des projets personnels, de l’immobilier ou des placements financiers.

                En plus du gain économique, cette vie « offshore » offre une meilleure gestion du temps : avec un décalage horaire favorable, les développeurs travaillent tôt le matin et profitent de leurs après-midis pour se reposer, explorer ou se former.

                Fiscalité, statut et précautions
                Mais ce mode de vie ne s’improvise pas. En matière juridique et fiscale, la plupart des expatriés conservent un statut de résident fiscal français, en choisissant par exemple le portage salarial ou une société basée en France. D'autres créent une entreprise à l’étranger, à condition de respecter les obligations locales.

                Une couverture santé internationale, un visa adapté et une gestion rigoureuse de ses revenus sont indispensables pour éviter les mauvaises surprises. Contrairement à une idée reçue, cette vie « ensoleillée » repose sur une discipline solide et une excellente organisation.

                Vers une nouvelle géographie du travail
                Ce phénomène, encore marginal il y a 10 ans, est désormais largement documenté. Des plateformes comme Nomad List, Remote OK ou SafetyWing recensent les destinations les plus populaires chez les nomades numériques. Bali, Chiang Mai, Lisbonne, Medellín ou encore Mexico City apparaissent régulièrement en tête.

                Avec la généralisation du télétravail et la montée des freelances dans le secteur tech, l’expatriation numérique n’est plus une utopie. Elle devient une stratégie économique, permettant de travailler moins, vivre mieux, et investir dans l’avenir.",

                'date' => "Janvier 2025",
                'photo' => "/images/article3.jpg",
                'auteur' => "Raoul Dupont",
                'local' => false,
            ],

            [
                'titre' => 'Web dévelopers en Belgique : salaires, migrations et réalités du marché en 2025.',

                'paragraphe' => "

                Bruxelles – Le métier de web developer continue d’attirer, évoluer et… migrer. Dans un marché du numérique en constante mutation, la Belgique se positionne comme un point d’équilibre en Europe, entre attractivité salariale et pression migratoire. En 2025, quel est le portrait réel du développeur web en Belgique ? Et comment se situe-t-il face à ses voisins européens ?

                Des salaires belges dans la moyenne haute européenne.
                Selon plusieurs études récentes, le salaire moyen brut d’un web developer en Belgique se situe autour de 49 100 € par an, soit environ 4 090 € par mois, hors primes et avantages. À Bruxelles, ces chiffres grimpent davantage : un développeur y gagne en moyenne entre 2 800 € et 3 317 € brut mensuel, avec des bonus qui peuvent atteindre 517 € par mois.

                Par spécialité, les salaires varient :

                Front-end : 40 000 – 110 000 € par an

                Back-end : 35 000 – 90 000 € par an

                Full-stack : 45 000 – 100 000 € par an

                En freelance, les développeurs expérimentés facturent jusqu’à 700 €/jour, soit plus de 13 000 €/mois brut dans certains cas.

                La Belgique, terre d’accueil de talents tech européens.
                La Belgique attire chaque année des profils tech venus de l’Europe de l’Est, du Sud et parfois d’Afrique du Nord. Pourquoi ? Pour des raisons simples : salaires plus élevés, qualité de vie, sécurité sociale, accès facilité au marché européen.

                Des développeurs ukrainiens, roumains ou espagnols trouvent en Belgique un équilibre entre vie professionnelle et stabilité économique, dans un contexte où les salaires dans leur pays d’origine plafonnent autour de 20 000 à 30 000 €/an.

                En parallèle, certains développeurs belges expérimentés choisissent malgré tout de partir vers la Suisse, les Pays-Bas ou l’Allemagne, où les salaires peuvent grimper jusqu’à 100 000 €/an voire plus, surtout dans les grandes entreprises technologiques ou via des contrats à l’international.

                Un marché sous pression.
                Avec la montée en puissance du télétravail, les entreprises belges font face à une double pression :

                concurrence internationale, notamment sur les profils tech très qualifiés ;

                fiscalité élevée, qui pousse certains seniors à partir en freelance ou à s’installer à l’étranger.

                Les packages d’embauche évoluent donc : mobility budgets, voitures de société, bonus, éco-chèques, assurances… deviennent quasi indispensables pour attirer les meilleurs talents.

                Un équilibre à préserver.

                La Belgique reste aujourd’hui une destination privilégiée pour les développeurs web à l’échelle européenne, grâce à un bon compromis entre salaire, qualité de vie et avantages sociaux. Mais la compétition monte d’un cran. Si elle souhaite conserver ses talents et en attirer de nouveaux, elle devra poursuivre ses efforts sur l’accueil, la fiscalité du travail numérique, et la flexibilité des modèles d’emploi.",

                'date' => "Mars 2025",
                'photo' => "/images/article2.jpg",
                'auteur' => "Emmanuelle Guart",
                'local' => true,
            ],

            [
                'titre' => "MolenGeek : la Silicon Valley de Molenbeek prend son envol...",
                'paragraphe' => "

                Bruxelles – implanté à Molenbeek depuis 2015, MolenGeek s'est hissé en dix ans au cœur d’un véritable mouvement d’innovation sociale et technologique. ce hub forme aujourd’hui des profils tech issus de milieux défavorisés, sans exigence de diplôme, et favorise l’inclusion numérique.

                Un modèle francophone d’insertion.

                MolenGeek propose des bootcamps intensifs (web, data, cybersécurité) à des formats gratuits, financés par des partenaires comme Google, Proximus et Samsung. Yassine Kharchaf, formateur, décrit le programme en deux axes : acquisition pratique de compétences via des projets clients, puis renforcement entrepreneurial.

                Des résultats concrets.

                Selon les informations officielles, 93 % des participants trouvent un emploi ou poursuivent leurs études à la fin de la formation. Les locaux affichent une centaine de projets start‑up lancés, et 200 membres actifs aujourd’hui.

                Impact intergénérationnel.

                L’initiative “SeniorGeek” permet à des aînés d’apprendre le numérique chaque semaine, animé par de jeunes coachs — un pont entre générations.

                Un rayonnement européen.

                Soutenu politiquement — même le roi Philippe s’y est rendu en mai 2017 — MolenGeek ouvre des antennes à Charleroi, Amsterdam, Casablanca… prouvant que le modèle s’exporte :contentReference[oaicite:5]{index=5}.

                Molenbeek, ancien quartier stigmatisé, se transforme en un catalyseur d’inclusion, d’innovation et de mixité sociale.

              ",
                'date' => "Mai 2025",
                'photo' => "/images/molengeek1.jpg",
                'auteur' => "Francis Leroy",
                'local' => true,
            ],
            [
                'titre' => "Inde & Pakistan : les géants du code mondial!",
                'paragraphe' => "

                Bangalore – en 2025, l’Inde regroupe près de 17 millions de développeurs, ce qui en fait la deuxième plus grande communauté mondiale sur GitHub après les États‑Unis. le Pakistan, de son côté, bénéficie d’un vivier jeune et connecté malgré une infrastructure plus modeste.

                Une masse critique de talents.

                En inde, plus de 15,4 millions de développeurs sont actifs sur GitHub, avec une croissance rapide — le pays pourrait dépasser les États‑Unis d’ici 2027‑2028. les plateformes de freelancing (upwork, fiverr…) sont saturées de profils indiens et pakistanais proposant des services compétitifs.

                L’essor des startups et de l’IA.

                Les géants comme Microsoft annoncent que l’Inde compte plus de 13 millions de développeurs sur GitHub, avec une projection de contribution massive à l’ia : 30 % de la main‑d’œuvre IA mondiale d’ici 2025. les hubs tech — Bangalore, Hyderabad, Lahore, Islamabad — accueillent d’importants investissements, notamment en centres de données.

                Le contraste économique.

                En 2024, l’Inde a dégagé 227 milliards $ d’exportations IT, contre 2,6 milliards $ pour le Pakistan. l’inde produit environ 1,5 million d’ingénieurs par an, selon Statista et estimations sectorielles; le pakistan compte des centaines de milliers de diplômés STEM (ingénieurs, IT) mais reste sur un volume moindre, avec des défis d’inclusion numérique.

                Jeunes, connectés, déterminés.

                Le Pakistan compte 147 millions d’utilisateurs d’internet et plus de 140 millions de connexions mobiles en 2025; de nombreux étudiants suivent des cursus STEM, et les exportations IT ont bondi de 42 % en septembre 2024 seul.

                Un écosystème global.

                Malgré des écarts économiques — l’Inde possède un marché boursier de 3 400 milliards $ contre 100 milliards $ pour le Pakistan — les deux pays coopèrent dans les projets open source, parfois transcendant les tensions politiques.

                en 2025, 40 % des applications utilisées en Europe contiennent du code écrit depuis le sous‑continent.

             ",
                'date' => "juin 2025",
                'photo' => "/images/india.avif",
                'auteur' => "Patrick Moreau",
                'local' => false,
            ],

            [
                'titre' => "De MolenGeek à l'emploi : le parcours inspirant de Julien.",
                'paragraphe' => "
                Bruxelles –  Julien, 24 ans, vient de franchir une étape décisive dans sa vie professionnelle. Après avoir suivi une formation en développement web chez MolenGeek, il a rapidement été repéré par une startup tech locale lors d’un jobday organisé par l’incubateur.

                De la formation au stage.

                Séduit par son portfolio et sa motivation, l’entreprise lui a proposé un stage de trois mois. Dès les premières semaines, Julien s’est distingué par sa maîtrise de React, son sens du travail d’équipe et sa capacité à résoudre des problèmes concrets.

                Une embauche rapide.

                Quelques jours avant la fin de son stage, l’entreprise lui a proposé un contrat à durée indéterminée. \"C’est une fierté immense, je n’imaginais pas trouver un emploi aussi vite\", confie-t-il. \"MolenGeek m’a donné les clés, j’ai juste ouvert la porte.\"

                Un exemple pour les jeunes.

                Ce succès illustre l’impact des formations intensives et inclusives comme celles proposées par MolenGeek, qui permettent à des jeunes issus de tous horizons d’accéder aux métiers du numérique.

                ",
                'date' => "Juin 2025",
                'photo' => "/images/student.jpg",
                'auteur' => "Journal MolenGeek",
                'local' => true,
            ],



        ]);
    }
}
