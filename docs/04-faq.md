# F.A.Q.

## How do I make the website my own?

- You can change the title of the website. It is set in `mkdocs.yml`.
- Once a file is in the website, you have a shortcut to editing in the upper right corner of the page.
- If you own a domain name, you could set it for your website in netlify.

## What are the limits for the random tables?

- The numbers have to be continuous (1, 2, ...) without missing numbers between the min and the max.
- The numbers can be a number (like `1`) or a range (like `1-5`). And it#s possible to mix them in the same table.
- The first column of a table has to be the numbers to pick, the second the value which will be taken. Other columns are ignored.

## Is it possible to pick an element from a random table defined in an other random table?

No, but you can work this around by knowing the possibilities to have this elements in the end. For example, you can adapts those tables:

!!! example "Random tables of tables"

    | Table 0 | |
    | - | :-
    | 1-2 | Table 1
    | 3 | Table 2


    | Table 1 | |
    | - | :-
    | 1 | A
    | 2 | B

    | Table 2 | |
    | - | :-
    | 1 | C
    | 2 | D

To this table:

!!! example "Unified table"

    | Table 0-1-2 | |
    | - | :-
    | 1-2 | A
    | 3-4 | B
    | 5 | C
    | 6 | D

