# Welcome

A static website to have TTRPG helpers at hand. I try to keep all important things on one screen.

This repo explains a bit how I use [mkdocs](https://www.mkdocs.org/) (with [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)), [github.com](https://github.com/), and [netlify.com](https://www.netlify.com/) to create an assistant for my TTRPG sessions. This website is easy to maintain and update and is nice on a mobile.

## Example

Click on the links to pick randomly a value.

!!! example "Example with random tables"
    | Oracles | &nbsp;
    | :- | :-
    | [Character](javascript:;){ class="random-table-group-roll" data="rtgroupcharacter" } | [NAME](javascript:;){ class="random-table-resolve rtgroupcharacter" data="rtironlandernames" } is a [IMPORTANCE](javascript:;){ class="random-table-resolve rtgroupcharacter" data="rtnpcimportance" }, [DESCRIPTOR](javascript:;){ class="random-table-resolve rtgroupcharacter" data="rtcharacterdescriptor" } [ROLE](javascript:;){ class="random-table-resolve rtgroupcharacter" data="rtcharacterrole" } <br/>who wants to [GOAL](javascript:;){ class="random-table-resolve rtgroupcharacter" data="rtcharactergoal" }.

    | Almost Certain | Likely | 50/50 | Unlikely | Small Chance
    | - | - | - | - | -
    | [Roll](javascript:;){ class="md-button random-table-resolve rtgroupodds" data="rtoddsalmostcertain" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtoddslikely" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtodds50502" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtoddsunlikely" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtoddssmallchance" }

    ??? abstract "The random tables"

        ??? quote "Oracle 10: Character role, from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtcharacterrole"></div>

            | - | -
            | - | -
            | 1-2   | Criminal
            | 3-4   | Healer
            | 5-6   | Bandit
            | 7-9   | Guide
            | 10-12 | Performer
            | 13-15 | Miner
            | 16-18 | Mercenary
            | 19-21 | Outcast
            | 22-24 | Vagrant
            | 25-27 | Forester
            | 28-30 | Traveler
            | 31-33 | Mystic
            | 34-36 | Priest
            | 37-39 | Sailor
            | 40-42 | Pilgrim
            | 43-45 | Thief
            | 46-48 | Adventurer
            | 49-51 | Forager
            | 52-54 | Leader
            | 55-58 | Guard
            | 59-62 | Artisan
            | 63-66 | Scout
            | 67-70 | Herder
            | 71-74 | Fisher
            | 75-79 | Warrior
            | 80-84 | Hunter
            | 85-89 | Raider
            | 90-94 | Trader
            | 95-99 | Farmer
            | 100   | Unusual role

        ??? quote "Oracle 11: Character goal, , [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtcharactergoal"></div>

            | - | -
            | - | -
            | 1-3   | Obtain an object
            | 4-6   | Make an agreement
            | 7-9   | Build a relationship
            | 10-12 | Undermine a relationship
            | 13-15 | Seek a truth
            | 16-18 | Pay a debt
            | 19-21 | Refute a falsehood
            | 22-24 | Harm a rival
            | 25-27 | Cure an ill
            | 28-30 | Find a person
            | 31-33 | Find a home
            | 34-36 | Seize power
            | 37-39 | Restore a relationship
            | 40-42 | Create an item
            | 43-45 | Travel to a place
            | 46-48 | Secure provisions
            | 49-51 | Rebel against power
            | 52-54 | Collect a debt
            | 55-57 | Protect a secret
            | 58-60 | Spread faith
            | 61-63 | Enrich themselves
            | 64-66 | Protect a person
            | 67-69 | Protect the status quo
            | 70-72 | Advance status
            | 73-75 | Defend a place
            | 76-78 | Avenge a wrong
            | 79-81 | Fulfill a duty
            | 82-84 | Gain knowledge
            | 85-87 | Prove worthiness
            | 88-90 | Find redemption
            | 91-92 | Escape from something
            | 93-95 | Resolve a dispute
            | 96-100| Roll twice

        ??? quote "Oracle 12: Character descriptor, from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtcharacterdescriptor"></div>

            | - | -
            | - | -
            | 1  | Stoic
            | 2  | Attractive
            | 3  | Passive
            | 4  | Aloof
            | 5  | Affectionate
            | 6  | Generous
            | 7  | Smug
            | 8  | Armed
            | 9  | Clever
            | 10 | Brave
            | 11 | Ugly
            | 12 | Sociable
            | 13 | Doomed
            | 14 | Connected
            | 15 | Bold
            | 16 | Jealous
            | 17 | Angry
            | 18 | Active
            | 19 | Suspicious
            | 20 | Hostile
            | 21 | Hardhearted
            | 22 | Successful
            | 23 | Talented
            | 24 | Experienced
            | 25 | Deceitful
            | 26 | Ambitious
            | 27 | Aggressive
            | 28 | Conceited
            | 29 | Proud
            | 30 | Stern
            | 31 | Dependent
            | 32 | Wary
            | 33 | Strong
            | 34 | Insightful
            | 35 | Dangerous
            | 36 | Quirky
            | 37 | Cheery
            | 38 | Disfigured
            | 39 | Intolerant
            | 40 | Skilled
            | 41 | Stingy
            | 42 | Timid
            | 43 | Insensitive
            | 44 | Wild
            | 45 | Bitter
            | 46 | Cunning
            | 47 | Remorseful
            | 48 | Kind
            | 49 | Charming
            | 50 | Oblivious
            | 51 | Critical
            | 52 | Cautious
            | 53 | Resourceful
            | 54 | Weary
            | 55 | Wounded
            | 56 | Anxious
            | 57 | Powerful
            | 58 | Athletic
            | 59 | Driven
            | 60 | Cruel
            | 61 | Quiet
            | 62 | Honest
            | 63 | Infamous
            | 64 | Dying
            | 65 | Reclusive
            | 66 | Artistic
            | 67 | Disabled
            | 68 | Confused
            | 69 | Manipulative
            | 70 | Relaxed
            | 71 | Stealthy
            | 72 | Confident
            | 73 | Weak
            | 74 | Friendly
            | 75 | Wise
            | 76 | Influential
            | 77 | Young
            | 78 | Adventurous
            | 79 | Oppressed
            | 80 | Vengeful
            | 81 | Cooperative
            | 82 | Armored
            | 83 | Apathetic
            | 84 | Determined
            | 85 | Loyal
            | 86 | Sick
            | 87 | Religious
            | 88 | Selfish
            | 89 | Old
            | 90 | Fervent
            | 91 | Violent
            | 92 | Agreeable
            | 93 | Hot-tempered
            | 94 | Stubborn
            | 95 | Incompetent
            | 96 | Greedy
            | 97 | Cowardly
            | 98 | Obsessed
            | 99 | Careless
            | 100| Ironsworn

        ??? quote "Odds Almost Certain (90%), from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtoddsalmostcertain"></div>

            | Value | Result
            | - | -
            | 1-10| No
            | 11-100  | Yes

        ??? quote "Odds Likely (75%), from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtoddslikely"></div>

            | Value | Result
            | - | -
            | 1-25| No
            | 26-100  | Yes

        ??? quote "Odds 50/50 (50%), from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtodds50502"></div>

            | Value | Result
            | - | -
            | 1-50  | Yes
            | 51-100| No

        ??? quote "Odds Unlikely (25%), from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtoddsunlikely"></div>

            | Value | Result
            | - | -
            | 1-75| No
            | 76-100 | Yes

        ??? quote "Odds Small Chance (10%), from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtoddssmallchance"></div>

            | Value | Result
            | - | -
            | 1-90| No
            | 91-100  | Yes

        ??? quote "13: Ironlander names, from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtironlandernames"></div>

            | - | -
            | - | -
            | 1  | Solana
            | 2  | Keelan
            | 3  | Cadigan
            | 4  | Sola
            | 5  | Kodroth
            | 6  | Kione
            | 7  | Katja
            | 8  | Tio
            | 9  | Artiga
            | 10 | Eos
            | 11 | Bastien
            | 12 | Elli
            | 13 | Maura
            | 14 | Haleema
            | 15 | Abella
            | 16 | Morter
            | 17 | Wulan
            | 18 | Mai
            | 19 | Farina
            | 20 | Pearce
            | 21 | Wynne
            | 22 | Haf
            | 23 | Aeddon
            | 24 | Khinara
            | 25 | Milla
            | 26 | Nakata
            | 27 | Kynan
            | 28 | Kiah
            | 29 | Jaggar
            | 30 | Beca
            | 31 | Ikram
            | 32 | Melia
            | 33 | Sidan
            | 34 | Deshi
            | 35 | Tessa
            | 36 | Sibila
            | 37 | Morien
            | 38 | Mona
            | 39 | Padma
            | 40 | Avella
            | 41 | Naila
            | 42 | Lio
            | 43 | Cera
            | 44 | Ithela
            | 45 | Zhan
            | 46 | Kaivan
            | 47 | Valeri
            | 48 | Hirsham
            | 49 | Pemba
            | 50 | Edda
            | 51 | Lestara
            | 52 | Lago
            | 53 | Elstan
            | 54 | Saskia
            | 55 | Kabeera
            | 56 | Caldas
            | 57 | Nisus
            | 58 | Serene
            | 59 | Chenda
            | 60 | Themon
            | 61 | Erin
            | 62 | Alban
            | 63 | Parcell
            | 64 | Jelma
            | 65 | Willa
            | 66 | Nadira
            | 67 | Gwen
            | 68 | Amara
            | 69 | Masias
            | 70 | Kanno
            | 71 | Razeena
            | 72 | Mira
            | 73 | Perella
            | 74 | Myrick
            | 75 | Qamar
            | 76 | Kormak
            | 77 | Zura
            | 78 | Zanita
            | 79 | Brynn
            | 80 | Tegan
            | 81 | Pendry
            | 82 | Quinn
            | 83 | Fanir
            | 84 | Glain
            | 85 | Emelyn
            | 86 | Kendi
            | 87 | Althus
            | 88 | Leela
            | 89 | Ishana
            | 90 | Flint
            | 91 | Delkash
            | 92 | Nia
            | 93 | Nan
            | 94 | Keeara
            | 95 | Katania
            | 96 | Morell
            | 97 | Temir
            | 98 | Bas
            | 99 | Sabine
            | 100| Tallus
            | 101| Segura
            | 102| Gethin
            | 103| Bataar
            | 104| Basira
            | 105| Joa
            | 106| Glynn
            | 107| Toran
            | 108| Arasen
            | 109| Kuron
            | 110| Griff
            | 111| Owena
            | 112| Adda
            | 113| Euros
            | 114| Kova
            | 115| Kara
            | 116| Morgan
            | 117| Nanda
            | 118| Tamara
            | 119| Asha
            | 120| Delos
            | 121| Torgan
            | 122| Makari
            | 123| Selva
            | 124| Kimura
            | 125| Rhian
            | 126| Tristan
            | 127| Siorra
            | 128| Sayer
            | 129| Cortina
            | 130| Vesna
            | 131| Kataka
            | 132| Keyshia
            | 133| Mila
            | 134| Lili
            | 135| Vigo
            | 136| Sadia
            | 137| Malik
            | 138| Dag
            | 139| Kuno
            | 140| Reva
            | 141| Kai
            | 142| Kalina
            | 143| Jihan
            | 144| Hennion
            | 145| Abram
            | 146| Aida
            | 147| Myrtle
            | 148| Nekun
            | 149| Menna
            | 150| Tahir
            | 151| Sarria
            | 152| Nakura
            | 153| Akiya
            | 154| Talan
            | 155| Mattick
            | 156| Okoth
            | 157| Khulan
            | 158| Verena
            | 159| Beltran
            | 160| Del
            | 161| Ranna
            | 162| Alina
            | 163| Muna
            | 164| Mura
            | 165| Torrens
            | 166| Yuda
            | 167| Nazmi
            | 168| Ghalen
            | 169| Sarda
            | 170| Shona
            | 171| Kalidas
            | 172| Wena
            | 173| Sendra
            | 174| Kori
            | 175| Setara
            | 176| Lucia
            | 177| Maya
            | 178| Reema
            | 179| Yorath
            | 180| Rhoddri
            | 181| Shekhar
            | 182| Servan
            | 183| Reese
            | 184| Kenrick
            | 185| Indirra
            | 186| Giliana
            | 187| Jebran
            | 188| Kotama
            | 189| Fara
            | 190| Katrin
            | 191| Namba
            | 192| Lona
            | 193| Taylah
            | 194| Kato
            | 195| Esra
            | 196| Eleri
            | 197| Irsia
            | 198| Kayu
            | 199| Bevan
            | 200| Chandra

        ??? quote "M06: NPC importance, from [Ironsworn](https://www.ironswornrpg.com/)"

            <div id="rtnpcimportance"></div>

            | - | -
            | - | -
            | 1-3 | Troublesome
            | 4-8 | Dangerous
            | 9-10| Formidable

## How to proceed to have it for you?

1. [Follow the technical steps](./02-how-to-set-things-up.md)
2. Create a new file on your repo with what you want in it.
    - To understand how things are working, your can check [random tables](./03-random-tables.md)

## Ironsworn as example

The random tables used here are from [Ironsworn](https://www.ironswornrpg.com/) — a free and wonderful TTRPG which can be played solo, GM-less, or, naturally, with GM. The random tables are the most useful when played Solo or GM-less. I encourage you to take a look at this [acclaimed](https://ennie-awards.com/portfolio-item/2019-nominees-and-winners/) TTRPG and thanks the author to make it available under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license](https://www.ironswornrpg.com/licensing). I am still impressed they did it.

