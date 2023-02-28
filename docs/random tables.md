
## Intro

This page contains a script which reads a "random table" and picks (randomnly) an item from it. To do this by yourself, you need:

1. A random table
1. A markup to identify your markup table
1. A trigger (like a button) to pick an item from the wished table.
1. Basic state
1. Packaging things
1. Source (how to see how this site is made)

You can also directly look at the source of this page or website to see how things are done.

## Random table

A table, in markdown format has to respect a certain format. Without going into details, here is an example, here is an example for defining a table:

```
| Chances | Result
| - | -
| 1-50  | Yes
| 51-100| No
```

## Identification

This is all nice and fun but there's a limit: it is not allowed to identify programmaticaly the table. FOr this, we have to cheat. We add an invisible object in the page. This object has an id.

```
<div id="rtodds5050"></div>

| Value | Result
| - | -
| 1-50  | Yes
| 51-100| No
```

Why `rtodds5050`? It's just my choice. It's a Random Table with 50/50 chances. This only thing about this value is that it has to be unique.

## Trigger

In markdown, there's not really things like buttons. The work around is to have links with some details on them:

- We have to take no action when the link is clicked (normally, we are sent to a new page): we use as URL `javascript:;`.
- We need to say which random table has to be used: we add an attribute `data` with the value of the identifier of the random table: `data="rtodds5050"`
- We also need to say that this link has to trigger the resolution of a random table: we add the class `random-table-resolve`.
- We want to have this link easy to find:  we add some nice packaging (optionnal :) ) `md-button`

So we need to add this in the document:

```
[Give yes/no on a 50/50 basis](javascript:;){ .md-button .random-table-resolve data="rtodds5050" }

<div id="rtodds5050"></div>

| Value | Result
| - | -
| 1-50  | Yes
| 51-100| No
```

## Basic state

With the previous piece of code we obtain:

!!! example "Example"
    [Give yes/no on a 50/50 basis](javascript:;){ .md-button .random-table-resolve data="rtodds5050" }

    <div id="rtodds5050"></div>

    | Value | Result
    | - | -
    | 1-50  | Yes
    | 51-100| No

    Even if its value is changing with the result, you can reclick the link (which look like a button to be fare).

## Packaging things

### With long tables

This is nearly all of what you need to know to use this functionnality. In may case, I don't want to see all the time the random table. I want the link, click on it and get the value. With the Yes/No value, I never will check the table. But when it is for other value, I may want to see it some times. So I hide the random table in a collapsed part:

!!! example "Example: Longger table"
    [NPC Descriptor](javascript:;){ .md-button .random-table-resolve data="rtcharacterdescriptor" }

    <div id="rtcharacterdescriptor"></div>

    ??? quote "Random table"

        <div id="rtcharacterdescriptor"></div>

        | Value | Result
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

        [This is the partial replication of the "ORACLE 12: CHARACTER DESCRIPTOR" Ironsworn's rulebook, page 183, available for free!](https://www.ironswornrpg.com/)

### Fancy demo?

A full demo of what I use now. There's one extra feature: it is possible to have link to trigger other linksm making it possible to roll several tables at once. You will have to check the source of this page to discover how to replicate this :)

!!! example "Multiple tables"
    You can [Roll add Odds](javascript:;){ class="random-table-group-roll" data="rtgroupodds" } at once here.

    | Almost Certain | Likely | 50/50 | Unlikely | Small Chance
    | - | - | - | - | -
    | [Roll](javascript:;){ class="md-button random-table-resolve rtgroupodds" data="rtoddsalmostcertain" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtoddslikely" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtodds50502" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtoddsunlikely" } | [Roll](javascript:;){ .md-button .random-table-resolve .rtgroupodds data="rtoddssmallchance" }



    ??? quote "Random tables"
        ??? quote "Odds Almost Certain (90%)"

            <div id="rtoddsalmostcertain"></div>

            | Value | Result
            | - | -
            | 1-10| No
            | 11-100  | Yes

        ??? quote "Odds Likely (75%)"

            <div id="rtoddslikely"></div>

            | Value | Result
            | - | -
            | 1-25| No
            | 26-100  | Yes

        ??? quote "Odds 50/50 (50%)"

            <div id="rtodds50502"></div>

            | Value | Result
            | - | -
            | 1-50  | Yes
            | 51-100| No

        ??? quote "Odds Unlikely (25%)"

            <div id="rtoddsunlikely"></div>

            | Value | Result
            | - | -
            | 1-75| No
            | 76-100 | Yes

        ??? quote "Odds Small Chance (10%)"

            <div id="rtoddssmallchance"></div>

            | Value | Result
            | - | -
            | 1-90| No
            | 91-100  | Yes

## Source

If you want to recreate this, look at the other page of the repo and click on the upper right corner, it will send you to github, when all the source is accessible and can be cloned (we say forked) at will.

